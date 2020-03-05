import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient, Season } from 'src/app/api/models';
import { IngredientService } from 'src/app/api/services';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.styl']
})
export class IngredientComponent implements OnInit {
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
