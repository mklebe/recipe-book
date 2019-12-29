import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../model/recipe';
import { Ingredient } from '../model/ingredient';
import { IngredientService } from '../ingredient.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.styl']
})
export class NewRecipeComponent implements OnInit {
  protected foundIngredients: Ingredient[]
  protected usedIngredients: Ingredient[]

  constructor(
    private recipeService: RecipeService,
    private ingredientService: IngredientService
  ) {
    this.foundIngredients = []
    this.usedIngredients = []
  }

  ngOnInit() {
  }

  protected addIngredient( ingredient: Ingredient ): void {
    this.usedIngredients.push( ingredient )
    this.foundIngredients = this.foundIngredients.filter( i => i !== ingredient ) 
  }

  protected findIngredientByQuery(inputstring: string): void {
    if( inputstring.length > 3 ) {
      this.ingredientService.findByQuery( inputstring )
        .subscribe(( items ) => {
          this.foundIngredients = items
        })
    }
  }

  protected addRecipe(): void {
    // const recipe = new Recipe('Brot', [
    //   new Ingredient('Mehl'),
    //   new Ingredient('Wasser'),
    //   new Ingredient('Salz'),
    //   new Ingredient('Olivenöl'),
    //   new Ingredient('Zucker'),
    //   new Ingredient('Hefe')
    // ])
    // recipe.addWorkstep('Zutaten zusammen mischen, warten, backen')
    // recipe.addImage('https://cdn.kika.de/bernd-friends/sendungen/bilder/bild178646_v-tlarge169_w-600_zc-be147c57.jpg')

    // this.recipeService.addRecipe( recipe )
  }

}
