import {Injectable} from '@angular/core';
import {RecipeIngredient} from '../models/recipeIngredient.model';
import {Recipe} from '../models/recipe.model';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Ingredient} from '../models/ingredient.model';

@Injectable()
export class AppService {

  recipeUrl = 'http://localhost:3000/recipes/';
  constructor(private _http: HttpClient) {
  }

  getRecipe(id) {
    return this._http.get(this.recipeUrl + id);
  }

  getAllRecipe() {
    return this._http.get(this.recipeUrl);
  }

  addRecipe(recipe: Recipe) {
   return this._http.post(this.recipeUrl, recipe );
  }

  getAutoCompleteList(letters) {
    const url = 'http://localhost:3000/ingredients/autoComplete-ingredient-name/';
    return this._http.get(url + letters);
  }


}
