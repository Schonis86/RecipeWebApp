import {Component, OnInit, ViewChild} from '@angular/core';
import {AppService} from '../../services/app-service';
import {FormControl} from '@angular/forms';
import {Recipe} from '../../models/recipe.model';
import {RecipeAutoComplete} from '../../models/recipeAutoComplete.model';
import {Router, RouterLink} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myControl = new FormControl();
  recipeList: any[];
  filteredRecipes: any[] = [];

  constructor(private _service: AppService,  private router: Router) {}

  ngOnInit() {
  }

  /*getAutoCompleteRecipes() {
    const recipeName = this.myControl.value;
    if (recipeName) {
      if (recipeName.length < 3) {
        this._service.searchRecipeByName(recipeName).subscribe((data: RecipeAutoComplete[]) => {
          console.log(data);
          this.recipeList = data;
          this.filteredRecipes = data;
        });
      } else {
        this.filteredRecipes = this.recipeList.filter(options => options.name.indexOf(recipeName) === 0);
      }
    }
  }*/

/*  displayFn(recipe?: RecipeAutoComplete): string | undefined {
    return recipe ? recipe.name : undefined;
  }

  gotoRecipe() {
    this.router.navigate(['/recipe', this.myControl.value.id]);
    this.myControl.reset();
  }*/

}
