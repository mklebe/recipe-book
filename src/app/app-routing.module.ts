import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeNewComponent } from './recipes/recipe-new/recipe-new.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { HomeComponent } from './home/home.component';

import { IngredientNewComponent } from './ingredients/ingredient-new/ingredient-new.component';
import { IngredientComponent } from './ingredients/ingredient/ingredient.component';
import { IngredientListComponent } from './ingredients/ingredient-list/ingredient-list.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';




const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipe/add', component: RecipeNewComponent},
  {path: 'recipe/list', component: RecipeListComponent},
  {path: 'recipe/:id', component: RecipeComponent},

  {path: 'ingredient/new', component: IngredientNewComponent},
  {path: 'ingredient/list', component: IngredientListComponent},
  {path: 'ingredient/:id', component: IngredientComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
