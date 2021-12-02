import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit{
  loguedIn = localStorage.getItem('email') || '';
  constructor(private router : Router ) { }

  ngOnInit(){
    if(!this.loguedIn){
      this.router.navigateByUrl('/login')
    }
  }

}

