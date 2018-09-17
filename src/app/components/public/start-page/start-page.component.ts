import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../services/app-service';
import {Recipe} from '../../../models/recipe.model';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private _service: AppService) { }
  recipeList: Recipe[] = [];

  ngOnInit() {
    this.getAllRecipe();
  }

  getAllRecipe() {
    this._service.getAllRecipe().subscribe((data: Recipe[]) => this.recipeList = data);
  }

}
