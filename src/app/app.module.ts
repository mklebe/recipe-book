import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeNewComponent } from './recipes/recipe-new/recipe-new.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { NotificationComponent } from './notification/notification.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RecipeTileComponent } from './recipes/shared/recipe-tile.component';
import { IngredientComponent } from './ingredients/ingredient/ingredient.component';
import { IngredientNewComponent } from './ingredients/ingredient-new/ingredient-new.component';
import {FormsModule} from '@angular/forms';
import { IngredientListComponent } from './ingredients/ingredient-list/ingredient-list.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { ApiModule } from './api/api.module';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    HeaderComponent,
    HomeComponent,

    RecipeComponent,
    RecipeNewComponent,
    RecipeListComponent,
    RecipeTileComponent,

    IngredientComponent,
    IngredientNewComponent,
    IngredientListComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ApiModule.forRoot({rootUrl: 'http://localhost:3000'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
