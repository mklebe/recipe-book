import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeNewComponent } from './recipes/recipe-new/recipe-new.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { HomeComponent } from './home/home.component';

import { IngredientCreateComponent } from './ingredients/ingredient-create/ingredient-create.component';
import { IngredientReadComponent } from './ingredients/ingredient-read/ingredient-read.component';
import { IngredientBrowseComponent } from './ingredients/ingredient-browse/ingredient-browse.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';




const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipe/add', component: RecipeNewComponent},
  {path: 'recipe/list', component: RecipeListComponent},
  {path: 'recipe/:id', component: RecipeComponent},

  {path: 'ingredient/new', component: IngredientCreateComponent},
  {path: 'ingredient/list', component: IngredientBrowseComponent},
  {path: 'ingredient/:id', component: IngredientReadComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
