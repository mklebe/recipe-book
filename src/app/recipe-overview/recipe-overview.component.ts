import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../model/recipe';


@Component({
  selector: 'app-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.styl']
})
export class RecipeOverviewComponent implements OnInit {

  constructor(public recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes()
  }

  private getRecipes(): void {
    this.recipeService.getRecipes()
  }

  public removeRecipe( recipe: Recipe ) {
    window.console.log( recipe.id )
  }
}
