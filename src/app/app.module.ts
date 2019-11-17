import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeOverviewComponent } from './recipe-overview/recipe-overview.component';
import { NotificationComponent } from './notification/notification.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NewRecipeComponent,
    RecipeOverviewComponent,
    NotificationComponent,
    DetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
