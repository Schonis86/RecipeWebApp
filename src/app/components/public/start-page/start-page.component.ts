import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../services/app-service';
import {Recipe} from '../../../models/recipe.model';
import {RecipeAutoComplete} from '../../../models/recipeAutoComplete.model';
import {FormControl, NgModel} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private _service: AppService, private router: Router) {
  }

  // recipeList: Recipe[] = [];
  myControl = new FormControl();
  recipeList: any[];
  allrecipes: Recipe[] = [];
  filteredRecipes: any[] = [];
  categoryList: string[] = ['Alla', 'Lättlagat', 'Fest', 'Söndagsmiddag', 'Matlåda', 'Barnkalas'];

  ngOnInit() {
    this.getAllRecipe();
  }

  getAllRecipe() {
    this._service.getAllRecipe().subscribe((data: Recipe[]) => this.allrecipes = data);
  }

  getByCategory(value) {
    if (value === 'Alla') {
      this.getAllRecipe();
    } else {
    this._service.getByRecipeCategory(value).subscribe((data: Recipe[]) => this.allrecipes = data);
    }
  }

  getAutoCompleteRecipes() {
    const recipeName = this.myControl.value;
    if (recipeName) {
      if (recipeName.length < 3) {
        this._service.searchRecipeByName(recipeName).subscribe((data: RecipeAutoComplete[]) => {
          console.log(data);
          this.recipeList = data;
          this.filteredRecipes = data;
        });
      } else {
        this.filteredRecipes = this.recipeList.filter(options => options.name.toLowerCase().indexOf(recipeName) === 0);
      }
    }
  }

  displayFn(recipe?: RecipeAutoComplete): string | undefined {
    return recipe ? recipe.name : undefined;
  }

  gotoRecipe() {
    this.router.navigate(['/recipe', this.myControl.value.id]);
    this.myControl.reset();
  }

}
