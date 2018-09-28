import {Injectable} from '@angular/core';
import {RecipeIngredient} from '../models/recipeIngredient.model';
import {Recipe} from '../models/recipe.model';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Ingredient} from '../models/ingredient.model';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable()
export class AppService {

  loginState: boolean;

  recipeUrl = 'http://localhost:3000/recipes/';

  constructor(private _http: HttpClient) {
    this.loginState = false;
  }

  getRecipe(id) {
    return this._http.get(this.recipeUrl + id);
  }

  getAllRecipe() {
    return this._http.get(this.recipeUrl);
  }

  addRecipe(recipe: Recipe) {
    return this._http.post(this.recipeUrl, recipe);
  }

  getAutoCompleteList(letters) {
    const url = 'http://localhost:3000/ingredients/autoComplete-ingredient-name/';
    return this._http.get(url + letters);
  }

  searchRecipeByName(name) {
    const url = 'http://localhost:3000/recipes/searchRecipeByName/';
    return this._http.get(url + name);
  }

  getByRecipeCategory(value) {
    const url = 'http://localhost:3000/recipes/searchRecipeByCategory/';
    return this._http.get(url + value);
  }

  searchRecipeByDescription(value) {
    const url = 'http://localhost:3000/recipes/searchByDescription/';
    return this._http.get(url + value);
  }

  checkUser(user: User) {
    return new Promise((resolve, reject) => {
      const url = 'http://localhost:3000/users/';
      this._http.post(url, user).subscribe(data => {
        this.loginState = data['user'];
        if (this.loginState) {
          console.log(this.loginState);
          resolve(this.loginState);
        } else {
          console.log(this.loginState);
          reject(this.loginState);

        }
      });
    });

  }

}
