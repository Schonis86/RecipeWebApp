import {Component, OnInit} from '@angular/core';
import {AppService} from "../../../services/app-service";
import {Recipe} from "../../../models/recipe.model";
import {NgForm} from "@angular/forms";
import {RecipeIngredient} from "../../../models/recipeIngredient.model";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  private sub: any;
  _id: any;
  recipe: Recipe = new Recipe();
  ingredients: RecipeIngredient[];
  portions: number[] = [2, 4, 6, 8, 10, 12];
  number = 4;

  constructor(private _service: AppService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this._id = params['_id'];
      this.getRecipe(this._id);
      console.log(this._id);
    });
    // this.recipe = this._service.getRecipe();

  }
  changePortion(value) {
    this.number = value;
  }

  getRecipe(id) {
    this._service.getRecipe(id).subscribe((data: Recipe) => {
      this.recipe = data;
    });
  }

}
