import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../shared/ingredient.service';
import { Ingredient } from '../shared/ingredient';

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
    this.ingredientService.findByQuery('', '50').subscribe(( ingredientList ) => {
      this.ingredientList = ingredientList
    })
  }

}
