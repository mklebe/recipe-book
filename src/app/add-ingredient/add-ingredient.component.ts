import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from '../model/ingredient';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.styl']
})
export class AddIngredientComponent implements OnInit {

  protected name: string
  protected description: string

  constructor(
    private ingredientService: IngredientService
  ) { }

  ngOnInit() {
  }

  protected addIngredient(): void {
    const ingredient = new Ingredient( this.name )
    ingredient.addDescription( this.description )

    this.ingredientService.addIngredient( ingredient )
      .subscribe( (response) => {
        window.console.log( response )
        this.name = ''
        this.description = ''
      })
  }

}