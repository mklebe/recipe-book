import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
import { Recipe } from '../shared/recipe';


@Component({
  selector: 'app-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.styl']
})
export class RecipeOverviewComponent implements OnInit {

  protected recipeList: Recipe[]

  constructor(public recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes()
  }

  private getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(( recipes ) => {
        this.recipeList = recipes
      })
      
  }

  public removeRecipe( recipe: Recipe ) {
    window.console.log( recipe.id )
  }
}
