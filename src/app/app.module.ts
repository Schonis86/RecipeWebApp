import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { AddRecipeComponent } from './components/private/add-recipe/add-recipe.component';
import {FormsModule} from "@angular/forms";
import {AppService} from "./services/app-service";

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    AddRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
