import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  registerForm: FormGroup;
  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.pattern('^[A-Za-z_%]{2,10}@[a-zA-z]{2,10}[.]{1}[A-Za-z]{2,5}$')]),
      password: new FormControl("" , [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl("" , [Validators.required, Validators.minLength(6)]),
      country: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required , this.validatePoint]),
      gender: new FormControl("" , Validators.required),
      phone: new FormControl("" , [Validators.required , Validators.pattern(' ^\\+84\\d{9,10}$')])
      }
    );
  }

  validatePoint(point: AbstractControl){
    let value = point.value;
    if (value < 18){
      return { "invalid" : true };
      } else {
      return  null ;
    }
  }

  ngOnInit(): void {
  }

  register() {

  }
}
