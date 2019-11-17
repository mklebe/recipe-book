import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeOverviewComponent } from './recipe-overview/recipe-overview.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path: 'add', component: NewRecipeComponent},
  {path: 'list', component: RecipeOverviewComponent},
  {path: 'details', component: DetailsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
