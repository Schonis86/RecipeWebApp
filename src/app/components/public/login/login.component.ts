import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AppService} from '../../../services/app-service';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage = '';
  status: any;

  constructor(private fb: FormBuilder, private router: Router, private _service: AppService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async emailLogin(value) {
    const user = new User();
    user.username = value.email;
    user.password = value.password;
    this.status = await this._service.checkUser(user);
    if (this._service.loginState) {
      this.router.navigate(['/add_recipe']);
    }
  }

}
