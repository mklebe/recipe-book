import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

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
    const recipe = new Recipe('Brot', 'Matthias')
    this.recipeService.addRecipe( recipe )
  }

}
