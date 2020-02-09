import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/api/models';
import { RecipeService } from 'src/app/api/services';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.styl']
})
export class RecipeComponent implements OnInit {

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
          this.recipeService.incrementHits({body: recipe})
            .subscribe(recipe => {
              window.console.log( recipe )
            })
        })
    })
  }

}
