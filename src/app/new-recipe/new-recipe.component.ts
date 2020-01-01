import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../model/recipe';
import { Ingredient } from '../model/ingredient';
import { IngredientService } from '../ingredient.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
  protected foundIngredients: Ingredient[]
  protected usedIngredients: Ingredient[]

  protected recipeName: string
  protected currentIngredient: string

  constructor(
    private recipeService: RecipeService,
    private ingredientService: IngredientService
  ) {
    this.recipeName = ""
    this.currentIngredient = ""

    this.foundIngredients = []
    this.usedIngredients = []
  }

  ngOnInit() {
  }

  protected addIngredient( ingredient: Ingredient ): void {
    this.usedIngredients.push( ingredient )
    this.foundIngredients = this.foundIngredients.filter( i => i !== ingredient ) 
  }

  protected findIngredientByQuery(): void {
    if( this.currentIngredient.length > 3 ) {
      this.ingredientService.findByQuery( this.currentIngredient )
        .subscribe(( items ) => {
          this.foundIngredients = items
        })
    }
  }

  protected addRecipe(): void {
    const recipe = new Recipe(
        this.recipeName, 
        this.usedIngredients)
    recipe.addWorkstep('Zutaten zusammen mischen, warten, backen')
    recipe.addImage('https://cdn.kika.de/bernd-friends/sendungen/bilder/bild178646_v-tlarge169_w-600_zc-be147c57.jpg')

    this.recipeService.addRecipe( recipe )
  }

}
