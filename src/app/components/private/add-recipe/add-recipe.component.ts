import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {RecipeIngredient} from '../../../models/recipeIngredient.model';
import {Recipe} from '../../../models/recipe.model';
import {AppService} from '../../../services/app-service';
import {Ingredient} from '../../../models/ingredient.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
  host: {
    class: 'container-fluid'
  }
})
export class AddRecipeComponent implements OnInit {
  // currentIngredients: RecipeIngredient[] = [];
  ingredient: RecipeIngredient;
  instructions: string[] = [];
  recipe: Recipe = new Recipe();
  categoryList: string[] = ['Lättlagat', 'Fest', 'Söndagsmiddag', 'Matlåda'];
  measureList: string[] = ['st', 'tsk', 'msk', 'gram', 'kilo', 'cl', 'dl', 'liter', 'knippe', 'portioner'];
  currentIngredients: RecipeIngredient[] = [];
  autoCompleteList: string[] = [];
  filteredOptions: string[];

  myControl = new FormControl();

  constructor(private _service: AppService) {
  }

  ngOnInit() {}

  addRecipe(form: NgForm) {

    this.recipe.name = form.value.name;
    this.recipe.description = form.value.recipeDescription;
    this.recipe.imageUrl = form.value.url;
    this.recipe.category = form.value.category;
    console.log(this.recipe);
    form.reset();
  }

  addIngredient(f: NgForm) {

    this.ingredient = new RecipeIngredient();
    this.ingredient.ingredient = new Ingredient();
    this.ingredient.ingredient.Namn = this.myControl.value;
    this.ingredient.qty = f.value.qty;
    this.ingredient.showName = f.value.showName;
    this.ingredient.measure = f.value.measure;
    this.ingredient.qtyInGrams = f.value.qtyInGrams;
    console.log(this.ingredient);
    this.currentIngredients.push(this.ingredient);
    this.myControl.setValue('');
  }
  addInstructions(instruct: NgForm) {
    this.instructions.push(instruct.value.instruction);
    instruct.reset();
  }

  saveRecipe() {
    this.recipe.instructions = this.instructions;
    this.recipe.ingredients = this.currentIngredients;
    console.log(this.recipe);
    this._service.addRecipe(this.recipe).subscribe(() => {
      console.log('Saved');
      this.currentIngredients = [];
    });
  }

  getautoCompleteList() {
    const letters = this.myControl.value;
    if (letters) {
      if (letters.length < 3) {
        this._service.getAutoCompleteList(letters).subscribe((data: string[]) => {
          this.autoCompleteList = data;
          this.filteredOptions = data;
          console.log(this.autoCompleteList);
        });
      } else {
        this.filteredOptions = this.autoCompleteList.filter(options => options.toLowerCase().indexOf(letters) === 0);
      }
    }
  }


}
