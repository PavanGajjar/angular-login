import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup = new FormGroup({});
  get loginFormControl() { return this.loginForm.controls };

  constructor() { }

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm() { 
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.maxLength(10)]),
      password: new FormControl("", Validators.required)
    })
  }
  login() { 
    if (this.loginForm.valid) {
      debugger
    } else {
      this.showValidationErrors();
    }
  }
  isFieldValid(fieldType: string): boolean { 
    return (this.loginFormControl[fieldType].touched ||
      this.loginFormControl[fieldType].dirty) && this.loginFormControl[fieldType].invalid;
  }
  showValidationErrors() { 
    
  }
}
