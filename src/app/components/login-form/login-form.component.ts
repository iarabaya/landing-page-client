import { Component } from '@angular/core';
import {FormGroup, FormControl, FormGroupDirective, Validators} from '@angular/forms';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent {
  hide = true;
  // email = new FormControl('', [Validators.required, Validators.email]);
  // password= new FormControl('')
  
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  // get email () { return this.loginForm.get('email');}
  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  logIn( formDirective: FormGroupDirective){
    console.log('has hecho log in');
    console.warn(this.loginForm.value)
    formDirective.resetForm();
    this.loginForm.reset();
  }

}
