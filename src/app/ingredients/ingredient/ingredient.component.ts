import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../shared/ingredient.service';
import { Ingredient } from '../shared/ingredient';
import { ActivatedRoute } from '@angular/router';

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
  ) { }

  ngOnInit() {
    this.routeService.params.subscribe( params => {
      const ingredientId = params['id']
      this.ingredientService.findById( ingredientId )
        .subscribe(( ingredient ) => {
          this.ingredient = ingredient
          this.ingredientService.incrementHits(ingredient)
            .subscribe( ingredient => {
              window.console.log( ingredient )
            })
        })
    })
  }

}
