import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/api/models';
import { IngredientService } from 'src/app/api/services';

@Component({
  selector: 'app-ingredient-read',
  templateUrl: './ingredient-read.component.html',
  styleUrls: ['./ingredient-read.component.styl']
})
export class IngredientReadComponent implements OnInit {
  protected ingredient: Ingredient

  constructor(
    private ingredientService: IngredientService,
    private routeService: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.routeService.params.subscribe( params => {
      const ingredientId = params['id']
      
      this.ingredientService.find( {id: ingredientId} )
        .subscribe(( ingredient ) => {
          this.ingredient = ingredient
          this.ingredientService.incrementIngredientHits({body: ingredient})
          .subscribe( ingredient => {
            window.console.log( ingredient )
            })
        })
    })
  }

}
