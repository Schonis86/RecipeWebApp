import {Component, OnInit} from '@angular/core';
import {AppService} from "../../../../services/app-service";
import {Recipe} from "../../../../models/recipe.model";
import {NgForm} from "@angular/forms";
import {Ingredient} from "../../../../models/ingredient.model";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe: Recipe = new Recipe();
  ingredients: Ingredient[];
  portions: number[] = [2, 4, 6, 8, 10, 12];
  number: number = 4;

  constructor(private _service: AppService) {
  }

  ngOnInit() {
    console.log('start');
    this.recipe = this._service.getRecipe();

  }
  changePortion(value) {
    this.number = value
  }
}
