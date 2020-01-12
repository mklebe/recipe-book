import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
import { Recipe } from '../shared/recipe';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.styl']
})
export class RecipeListComponent implements OnInit {

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
