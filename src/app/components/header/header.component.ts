import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  showFiller = false;
  loguedIn = localStorage.getItem('email') || ''

  constructor(private router : Router){}

  logout(){
    console.log('has cerrado sesion');
    localStorage.clear()
    this.router.navigateByUrl('Login')

  }
}
