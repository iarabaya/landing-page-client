import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Equipment {
  clienteId: number;
  mark: string;
  model: string;
  failure: string;
}

@Injectable({
  providedIn: 'root'
})
export class RetirementService {

  constructor(private http: HttpClient) { }

  request(equipment: Equipment):  Observable<Equipment>  {
    //  let headers = new HttpHeaders({'Content-Type':'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200/'}); 
    return  this.http.post<Equipment>('api/Retirement', equipment);
  }
}
