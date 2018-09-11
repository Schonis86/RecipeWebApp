import {Component, OnInit} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {Ingredient} from '../../../models/ingredient.model';
import {Recipe} from '../../../models/recipe.model';
import {AppService} from '../../../services/app-service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  // currentIngredients: Ingredient[] = [];
  ingredient: Ingredient;
  recipe: Recipe = new Recipe();
  categoryList: string[] = ['Lättlagat', 'Fest', 'Söndagsmiddag', 'MatLåda', 'BarnKalas'];
  measureList: string[] = ['st', 'tsk', 'msk', 'gram', 'kilo', 'cl', 'dl', 'liter', 'knippe'];
  currentIngredients: Ingredient[] = [];


  constructor(private _service: AppService) {

  }

  ngOnInit() {

    // this.recipe = this._service.getRecipe();

  }

  addRecipe(form: NgForm) {

    console.log(this.recipe.name = form.value.name);
    this.recipe.name = form.value.name;
    this.recipe.description = form.value.recipeDescription;
    this.recipe.imageUrl = form.value.url;
    this.recipe.category = form.value.category;
    console.log(this.recipe);
    form.reset();
  }

  addIngredient(f: NgForm) {

    this.ingredient = new Ingredient();
    this.ingredient.product = f.value.product;
    this.ingredient.qty = f.value.qty;
    this.ingredient.measure = f.value.measure;
    this.currentIngredients.push(this.ingredient);
    f.reset();
  }

  saveRecipe() {
    this.recipe.ingredients = this.currentIngredients;
    this._service.addRecipe(this.recipe).subscribe(()  => {
      console.log('Saved');
      this.currentIngredients = [];
    });
  }

}
