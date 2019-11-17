import { Injectable } from '@angular/core'
import { Recipe } from './recipe'

import { Observable, of } from 'rxjs'
import { map, tap } from 'rxjs/operators';
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private solrBaseUrl: string = 'http://localhost:8983/solr/recipe-book'

  public recipes: Recipe[] = []

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  getRecipes(): void {
    this.http.get<SolrHttpResponse>(`${this.solrBaseUrl}/select?q=*%3A*`)
      .pipe(
        map((res) => {
          return res.response.docs.map( (element) => {
            const rec = new Recipe( element.name, element.author )
            rec.addId( element.id )
            return rec
          } )
        }),
        tap(_ => this.log('Recipes Fetched'))
      )
      .subscribe(( recipes ) => {
        this.recipes = recipes
      })
  }

  addRecipe( recipe: Recipe ): void {
    const header = new HttpHeaders()
    header.append('Content-Type', 'application/json')
    
    this.http.post<Recipe>(`${this.solrBaseUrl}/update?commit=true`, {
      'add': {
        'doc': {
          'author': recipe.author,
          'name': recipe.name,
          'image': '',
          'ingredients': '[]',
          'worksteps': '[]',
        }
      }
    },
    {
      headers: header,
      withCredentials: true
    })
    .subscribe(( res ) => {
      window.console.log( res )
      this.recipes.push( recipe )
    })
  }

  private log( message: string ):void {
    this.messageService.add( message )
  }
}

interface SolrHttpResponse {
  response: SolrResponse
}

interface SolrResponse {
  numFound: number
  start: number,
  docs: Recipe[]
}

