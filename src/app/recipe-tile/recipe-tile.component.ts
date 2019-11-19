import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-recipe-tile',
  templateUrl: './recipe-tile.component.html',
  styleUrls: ['./recipe-tile.component.styl']
})
export class RecipeTileComponent implements OnInit {
  @Input() recipe: Recipe
  @Input() id: number

  constructor() { }

  ngOnInit() {
  }

}
