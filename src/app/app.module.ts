import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {AddRecipeComponent} from './components/private/add-recipe/add-recipe.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppService} from './services/app-service';
import {RecipeComponent} from './components/public/recipe/recipe.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {StartPageComponent} from './components/public/start-page/start-page.component';
import {SideMenuComponent} from './components/side-menu/side-menu.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddRecipeComponent,
    RecipeComponent,
    StartPageComponent,
    SideMenuComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'recipe/:id', component: RecipeComponent},
      {path: 'add_recipe', component: AddRecipeComponent},
      {path: 'all_recipes', component: StartPageComponent}

    ])
  ],
  providers: [AppService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
