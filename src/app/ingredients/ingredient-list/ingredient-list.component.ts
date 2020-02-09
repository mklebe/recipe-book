import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/api/models';
import { IngredientService } from 'src/app/api/services';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.styl']
})
export class IngredientListComponent implements OnInit {
  protected ingredientList: Ingredient[]

  constructor(
    private ingredientService: IngredientService
  ) {
    this.ingredientList = []
  }

  ngOnInit() {
    this.ingredientService.ingredientControllerFindAll().subscribe(( ingredientList ) => {
      this.ingredientList = ingredientList
    })
  }

}
