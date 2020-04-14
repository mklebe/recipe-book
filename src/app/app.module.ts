import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeCreateComponent } from './recipe/recipe-create/recipe-create.component';
import { RecipeBrowseComponent } from './recipe/recipe-browse/recipe-browse.component';
import { NotificationComponent } from './notification/notification.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RecipeTileComponent } from './recipe/shared/recipe-tile.component';
import { IngredientReadComponent } from './ingredient/ingredient-read/ingredient-read.component';
import { IngredientCreateComponent } from './ingredient/ingredient-create/ingredient-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IngredientBrowseComponent } from './ingredient/ingredient-browse/ingredient-browse.component';
import { RecipeReadComponent } from './recipe/recipe-read/recipe-read.component';
import { ApiModule } from './api/api.module';
import { IngredientUpdateComponent } from './ingredient/ingredient-update/ingredient-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    HeaderComponent,
    HomeComponent,

    RecipeReadComponent,
    RecipeCreateComponent,
    RecipeBrowseComponent,
    RecipeTileComponent,

    IngredientReadComponent,
    IngredientCreateComponent,
    IngredientBrowseComponent,
    IngredientUpdateComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ApiModule.forRoot({rootUrl: 'http://localhost:3000'}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
