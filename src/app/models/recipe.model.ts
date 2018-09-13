import {RecipeIngredient} from './recipeIngredient.model';

export class Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: RecipeIngredient[];
  imageUrl: string;
  category: string;
}
