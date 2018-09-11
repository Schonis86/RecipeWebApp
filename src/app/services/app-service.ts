import {Injectable} from '@angular/core';
import {Ingredient} from '../models/ingredient.model';
import {Recipe} from '../models/recipe.model';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppService {

  recipeUrl = 'http://localhost:3000/recipes/';


  currentIngredients: Ingredient[] = [
    {product: 'Torsk', measure: 'g', qty: 50},
    {product: 'små Gula lökar', measure: 'st', qty: 2.5},
    {product: 'burk hela skalade tomater', measure: 'st', qty: 0.5},
    {product: 'fiskbuljong', measure: 'dl', qty: 1},
  ];
  recipe: Recipe = {
    id: 1,
    name: 'Torskgryta med saffran',
    description: 'En lika smakrik soppa som den är färggrann! De skalade tomaterna ger inte bara färg utan även härlig syra som passar utmärkt ihop med den milda torsken som får koka till sig i grytan. Hintar av vitt vin, saffran och dill får rätten att bli komplett!',
    category: 'Fest',
    ingredients: this.currentIngredients,
    imageUrl: 'https://www.ica.se//icase.azureedge.net/imagevaultfiles/id_73537/cf_259/fiskarhustruns-fisksoppa-003760.jpg'
  };

  constructor(private _http: HttpClient) {
  }

  /*getRecipe():Recipe {
    return this.recipe;
  }*/

  getIngredient(): Ingredient[] {
    return this.currentIngredients.slice(0);
  }

  getRecipe(id) {
    return this._http.get(this.recipeUrl + id);
  }

  addRecipe(recipe: Recipe) {
   return this._http.post(this.recipeUrl, recipe );
  }


}
