import { Component } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { User } from '../../interfaces/interfaces';

import { LoginService } from 'src/app/services/login/login.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  hide = true;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor( private loginService: LoginService, private router: Router){}

  user: User = {
    email: '',
    password: ''
  }

  logIn( formDirective: FormGroupDirective){
    this.user = this.loginForm.value;

    this.loginService.login(this.user.email, this.user.password).subscribe( res => {
      console.log(res)
      if(res.id){
        localStorage.setItem('email', this.user.email);
        this.router.navigateByUrl('/home');
      }else{
        Swal.fire('Error', res, 'error');
      }
    })

    formDirective.resetForm();
    this.loginForm.reset();
  }

}
