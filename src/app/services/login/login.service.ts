import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, of } from "rxjs";
import { LoginResponse } from '../../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    const url = `api/Login?email=${email}&password=${password}`;
    //  let headers = new HttpHeaders({'Content-Type':'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200/'}); 
    return  this.http.get<LoginResponse>(url).pipe( 
      // catchError( res => of(res.error))
      );
  }
}
