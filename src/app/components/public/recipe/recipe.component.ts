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
    this.nutritionInfo = {
      kolhydrater:  await this.getNutritionValue('Kolhydrater'),
      protein: await this.getNutritionValue('Protein'),
      // socker: await this.getNutritionValue('Socker totalt'),
      // MFet: await this.getNutritionValue('Summa mättade fettsyror'),
  };
    console.log(this.nutritionInfo);
  }

  getNutritionValue(name) {
    return new Promise(resolve => {
      let result = 0;
      this.recipe.ingredients.forEach((recipeIngredient: RecipeIngredient) => {
        const value = recipeIngredient.ingredient.Naringsvarden.Naringsvarde.find(element => element.Namn === name);
        result += recipeIngredient.qty * recipeIngredient.qtyInGrams / 100 * +value.Varde.replace(',', '.');
        return result;
      });
      resolve(result);
    });
  }

  /* async getNutritionValue(name) {
     let result = 0;

     // Hittar alla ingredienser i näringslistan som finns i receptet.
     const ingredients = await recipeIngredient.ingredient.find({ Namn : { $in: this.recipe.ingredients} });

     // Lägger ihop alla näringsvärden som heter samma som inparametern 'name'. nv = näringsvärde
     const value = ingredients.Naringsvarden.Naringsvarde.reduce((acc, nv) => nv.Namn === name ? acc += +nv.Varde.replace(',', '.') : acc, 0);

     result += value;

     return result;
   }*/
}
