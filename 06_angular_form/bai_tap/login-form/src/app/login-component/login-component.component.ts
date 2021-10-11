import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  loginForm: FormGroup;
  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.minLength(4),
      Validators.pattern('^[A-Za-z_%]{2,10}@[a-zA-z]{2,10}[.]{1}[A-Za-z]{2,5}$')]),
      password: new FormControl("", [Validators.required , Validators.minLength(6)])
    });
  }

  ngOnInit(): void {
  }

  submitLogin() {
    console.log(this.loginForm.value);
  }
}
