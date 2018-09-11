import {Ingredient} from './ingredient.model';

export class Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: Ingredient[];
  imageUrl: string;
  category: string;
}
