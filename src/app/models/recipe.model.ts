import {RecipeIngredient} from './recipeIngredient.model';

export class Recipe {
  _id: string;
  name: string;
  description: string;
  ingredients: RecipeIngredient[];
  imageUrl: string;
  category: string;
}
