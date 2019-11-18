import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.styl']
})
export class DetailsComponent implements OnInit {

  protected recipe: Recipe

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    const recipeId = parseInt( this.route.snapshot.paramMap.get('id') )
    this.recipe = this.recipeService.recipes[recipeId]
  }

}
