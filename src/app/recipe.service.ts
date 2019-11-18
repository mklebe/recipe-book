import { Injectable } from '@angular/core'
import { Recipe } from './model/recipe'

import { map, tap } from 'rxjs/operators';
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { RECIPE_LIST_MOCK } from './mock-recipe'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiEndpoint: string = 'http://localhost:3000/recipe'

  public recipes: Recipe[] = RECIPE_LIST_MOCK

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  getRecipes(): void {
    this.http.get(`${this.apiEndpoint}`)
      .pipe(
        map((res) => {
          return {}
        }),
        tap(_ => this.log('Recipes Fetched'))
      )
  }

  addRecipe( recipe: Recipe ): void {
    const header = new HttpHeaders()
    header.append('Content-Type', 'application/json')

    window.console.log( recipe )
    
    this.http.post<Recipe>(`${this.apiEndpoint}`, recipe,
    {
      headers: header
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
