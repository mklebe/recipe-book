import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../shared/ingredient.service';
import { Ingredient } from '../shared/ingredient';

@Component({
  selector: 'app-ingredient-new',
  templateUrl: './ingredient-new.component.html',
  styleUrls: ['./ingredient-new.component.styl']
})
export class IngredientNewComponent implements OnInit {

  protected name: string
  protected description: string

  protected ingredientList: Ingredient[] = []

  constructor(
    private ingredientService: IngredientService
  ) { }

  ngOnInit() {}

  protected addIngredient(): void {
    const ingredient = new Ingredient( this.name )
    ingredient.addDescription( this.description )

    this.ingredientService.addIngredient( ingredient )
      .subscribe( (response) => {
        this.name = ''
        this.description = ''
      })
  }
}
