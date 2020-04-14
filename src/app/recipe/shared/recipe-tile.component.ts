import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/api/models';

@Component({
  selector: 'app-recipe-tile',
  templateUrl: './recipe-tile.component.html',
  styleUrls: ['./recipe-tile.component.styl']
})
export class RecipeTileComponent implements OnInit {
  @Input() recipe: Recipe
  protected recipeSlug: string

  constructor() {
  }

  ngOnInit() {
    this.recipeSlug = ''+this.recipe.id
  }

}
