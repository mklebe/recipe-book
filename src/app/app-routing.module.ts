import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeOverviewComponent } from './recipe-overview/recipe-overview.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { IngredientComponent } from './ingredient/ingredient.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add', component: NewRecipeComponent},
  {path: 'list', component: RecipeOverviewComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'ingredient', component: IngredientComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
