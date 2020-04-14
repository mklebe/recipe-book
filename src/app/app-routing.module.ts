import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { RecipeCreateComponent } from './recipe/recipe-create/recipe-create.component';
import { RecipeBrowseComponent } from './recipe/recipe-browse/recipe-browse.component';
import { RecipeReadComponent } from './recipe/recipe-read/recipe-read.component';

import { IngredientCreateComponent } from './ingredient/ingredient-create/ingredient-create.component';
import { IngredientReadComponent } from './ingredient/ingredient-read/ingredient-read.component';
import { IngredientBrowseComponent } from './ingredient/ingredient-browse/ingredient-browse.component';




const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipe/:id', component: RecipeReadComponent},
  {path: 'recipe/add', component: RecipeCreateComponent},
  {path: 'recipe/list', component: RecipeBrowseComponent},

  {path: 'ingredient/new', component: IngredientCreateComponent},
  {path: 'ingredient/list', component: IngredientBrowseComponent},
  {path: 'ingredient/:id', component: IngredientReadComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
