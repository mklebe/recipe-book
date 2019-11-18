import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../model/recipe';
import { Ingredient } from '../model/ingredient';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.styl']
})
export class NewRecipeComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  protected addRecipe(): void {
    const recipe = new Recipe('Brot', [
      new Ingredient('Mehl'),
      new Ingredient('Wasser'),
      new Ingredient('Salz'),
      new Ingredient('Olivenöl'),
      new Ingredient('Zucker'),
      new Ingredient('Hefe')
    ])
    recipe.addWorkstep('Zutaten zusammen mischen, warten, backen')
    recipe.addImage('https://cdn.kika.de/bernd-friends/sendungen/bilder/bild178646_v-tlarge169_w-600_zc-be147c57.jpg')

    this.recipeService.addRecipe( recipe )
  }

}
