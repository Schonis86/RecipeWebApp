import {Component, OnInit, OnChanges, ViewChild} from '@angular/core';
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
export class HeaderComponent implements OnChanges {
  aouthStatus: boolean;

  constructor(private _service: AppService) {
    this.aouthStatus = _service.loginState;
  }

  ngOnChanges() {
    console.log(this.aouthStatus);
    this.aouthStatus = this._service.loginState;
  }

  logout() {
    this._service.loginState = false;
  }
}
