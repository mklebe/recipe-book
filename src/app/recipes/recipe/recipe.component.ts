import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../shared/recipe.service';
import { Recipe } from '../shared/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.styl']
})
export class RecipeComponent implements OnInit {

  protected recipe: Recipe

  constructor(
    private routeService: ActivatedRoute,
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    this.routeService.params.subscribe( params => {
      const ingredientId = params['id']
      this.recipeService.findById( ingredientId )
        .subscribe(( recipe ) => {
          this.recipe = recipe
          this.recipeService.incrementHits( recipe )
            .subscribe(recipe => {
              window.console.log( recipe )
            })
        })
    })
  }

}
