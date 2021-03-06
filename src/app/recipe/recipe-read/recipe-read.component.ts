import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/api/models';
import { RecipeService } from 'src/app/api/services';


@Component({
  selector: 'app-recipe-read',
  templateUrl: './recipe-read.component.html',
  styleUrls: ['./recipe-read.component.styl']
})
export class RecipeReadComponent implements OnInit {

  protected recipe: Recipe

  constructor(
    private routeService: ActivatedRoute,
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    this.routeService.params.subscribe( params => {
      this.recipeService.findById({id: params.id})
        .subscribe(( recipe ) => {
          this.recipe = recipe
          this.recipeService.incrementRecipeHits({body: recipe})
            .subscribe(recipe => {
              window.console.log( recipe )
            })
        })
    })
  }

}
