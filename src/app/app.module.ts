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
import { IngredientReadComponent } from './ingredient/ingredient-read/ingredient-read.component';
import { IngredientCreateComponent } from './ingredient/ingredient-create/ingredient-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IngredientBrowseComponent } from './ingredient/ingredient-browse/ingredient-browse.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { ApiModule } from './api/api.module';
import { IngredientUpdateComponent } from './ingredient/ingredient-update/ingredient-update.component';

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
