import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../services/app-service';
import {Recipe} from '../../../models/recipe.model';
import {NgForm} from '@angular/forms';
import {RecipeIngredient} from '../../../models/recipeIngredient.model';
import {ActivatedRoute} from '@angular/router';
import {Ingredient} from '../../../models/ingredient.model';
import {Nutritional} from '../../../models/nutritional.model';
import {NutritionInfo} from '../../../models/nutritionInfo.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  private sub: any;
  _id: any;
  recipe: any;
  ingredients: RecipeIngredient[];
  nutritionInfo: any;
  portions: number[] = [2, 4, 6, 8, 10, 12];
  number = 4;
  i: Ingredient;

  constructor(private _service: AppService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this._id = params['_id'];
      this.getRecipe(this._id);
    });

  }

  changePortion(value) {
    this.number = value;
  }

  async getRecipe(id) {
    this.recipe = await this._service.getRecipe(id).toPromise();
    console.log(this.recipe);
    this.nutritionInfo = {
      kolhydrater:  await this.getNutritionValue('Kolh'),
      protein: await this.getNutritionValue('Prot'),
      energi: await this.getNutritionValue('Ener'),
      salt: await this.getNutritionValue('NaCl'),
      mattat: await this.getNutritionValue('Mfet'),
      omattat: await this.getNutritionValue('Mone'),
      fleromattat: await this.getNutritionValue('Pole'),
      socker: await this.getNutritionValue('Mono/disack')
  };
    console.log(this.nutritionInfo);
  }

  getNutritionValue(name) {
    return new Promise(resolve => {
      let result = 0;
      this.recipe.ingredients.forEach((recipeIngredient: RecipeIngredient) => {
        const value = recipeIngredient.ingredient.Naringsvarden.Naringsvarde.find(element => element.Forkortning === name);
        result += recipeIngredient.qty * recipeIngredient.qtyInGrams / 100 * +value.Varde.replace(',', '.');
        return result.toFixed(2);
      });
      resolve(result);
    });
  }
}
