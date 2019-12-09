import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from './model/ingredient';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private restEntpoint: string = `http://localhost:3000/ingredient`

  constructor( 
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getAll(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>( this.restEntpoint ).pipe(
      tap( _ => window.console.log('new item arived'))
    )
  }

  addIngredient( ingredient: Ingredient ): Observable<Ingredient> {
    return this.http.post<Ingredient>(this.restEntpoint, ingredient)
      .pipe(
        tap( _ => this.messageService.add(`Ingredient was added!`) ),
      )
  }
}
