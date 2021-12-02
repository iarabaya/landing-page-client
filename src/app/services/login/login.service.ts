import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, tap } from "rxjs";
import { LoginResponse, UserData } from '../../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _user!: UserData;

  constructor(private http: HttpClient) { }

  get user (){
    return {...this._user}
  }

  login(email: string, password: string){
    const url = `api/Login?email=${email}&password=${password}`;
    //  let headers = new HttpHeaders({'Content-Type':'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200/'}); 
    return  this.http.get<LoginResponse>(url).pipe( 
      tap( res => {
        if(res.id){
          localStorage.setItem('clientId', JSON.stringify(res.id));
          this._user = {
            clientId: res.id,
            email: res.email,
            fullName:res.fullName,
            address: res.address,
            cellPhone: res.cellPhone
          }
        }
      }),
      catchError( res => of(res.error))
      );
  }
}
