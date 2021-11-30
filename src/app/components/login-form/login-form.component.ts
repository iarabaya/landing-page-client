import { Component } from '@angular/core';
import {FormGroup, FormControl, FormGroupDirective, Validators} from '@angular/forms';
import { LoginService, User } from 'src/app/services/login/login.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent {
  hide = true;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor( private loginService: LoginService){}

  user: User = {
    email: '',
    password: ''
  }

  logIn( formDirective: FormGroupDirective){
    console.log('has hecho log in');
    console.warn(this.loginForm.value);

    this.user = this.loginForm.value;
    console.log(this.user.email)

    this.loginService.login(this.user.email, this.user.password).subscribe( res => {
      console.log(res)
      localStorage.setItem('userLoged', JSON.stringify(this.user.email));
    })

    formDirective.resetForm();
    this.loginForm.reset();
  }

}
