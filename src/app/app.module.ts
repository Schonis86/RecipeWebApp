import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContentComponent} from './components/content/content.component';
import {HeaderComponent} from './components/header/header.component';
import {AddRecipeComponent} from './components/private/add-recipe/add-recipe.component';
import {FormsModule} from '@angular/forms';
import {AppService} from './services/app-service';
import {RecipeComponent} from './components/public/recipe/recipe.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { StartPageComponent } from './components/public/start-page/start-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    AddRecipeComponent,
    RecipeComponent,
    StartPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [AppService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
