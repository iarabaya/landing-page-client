import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

export interface User {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string):  Observable<User>  {
    //  let headers = new HttpHeaders({'Content-Type':'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200/'}); 
    return  this.http.get<User>('api/Login'+'?email=' + email + '&password=' + password );
  }
}
