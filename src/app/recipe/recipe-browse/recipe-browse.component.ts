import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/api/services';
import { Recipe } from 'src/app/api/models';


@Component({
  selector: 'app-recipe-browse',
  templateUrl: './recipe-browse.component.html',
  styleUrls: ['./recipe-browse.component.styl']
})
export class RecipeBrowseComponent implements OnInit {

  protected recipeList: Recipe[]

  constructor(
    private recipeService: RecipeService,

  ) { }

  ngOnInit() {
    this.getRecipes()
  }

  private getRecipes(): void {
    this.recipeService.recipeControllerFindAll()
      .subscribe( ( recipes ) => {
        this.recipeList = recipes
        window.console.log( recipes )
      })
  }

  public removeRecipe( recipe: Recipe ) {
    window.console.log( recipe.name )
  }
}
