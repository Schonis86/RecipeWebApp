import {Ingredient} from "./ingredient.model";

export class Recipe {
  name: string;
  description: string;
  ingredients: Ingredient[];
  imageUrl: string;
  category: string;
}
