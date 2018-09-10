import {Injectable} from "@angular/core";
import {Ingredient} from "../models/ingredient.model";
import {Recipe} from "../models/recipe.model";

@Injectable()
export class AppService {

  private recipe: Recipe;
  private  currentIngredients: Ingredient[];
  constructor() {
    this.currentIngredients = [
      {product: 'Torsk', measure: 'g' , qty: 200},
      {product: 'små Gula lökar', measure: 'st', qty: 10},
      {product: 'burk hela skalade tomater', measure: 'st', qty: 1},
      {product: 'fiskbuljong', measure: 'dl', qty: 5},
      {product: 'burk hela skalade tomater', measure: 'dl', qty: 1}
    ];
    this.recipe = {
      id: 1,
      name: 'Torskgryta med saffran',
      description: 'En lika smakrik soppa som den är färggrann! De skalade tomaterna ger inte bara färg utan även härlig syra som passar utmärkt ihop med den milda torsken som får koka till sig i grytan. Hintar av vitt vin, saffran och dill får rätten att bli komplett!',
      category: 'Fest',
      ingredients: this.currentIngredients,
      imageUrl: 'https://www.ica.se//icase.azureedge.net/imagevaultfiles/id_73537/cf_259/fiskarhustruns-fisksoppa-003760.jpg'
    };
  }

  getRecipe(): Recipe {
    return this.recipe
  }




}
