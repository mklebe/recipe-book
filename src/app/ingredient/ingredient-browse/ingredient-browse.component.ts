import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/api/models';
import { IngredientService } from 'src/app/api/services';

@Component({
  selector: 'app-ingredient-browse',
  templateUrl: './ingredient-browse.component.html',
  styleUrls: ['./ingredient-browse.component.styl']
})
export class IngredientBrowseComponent implements OnInit {
  protected ingredientList: Ingredient[]

  constructor(
    private ingredientService: IngredientService
  ) {
    this.ingredientList = []
  }

  ngOnInit() {
    this.ingredientService.findAll({query: 100})
      .subscribe(( ingredientList ) => {
        this.ingredientList = ingredientList
      })
  }

}
