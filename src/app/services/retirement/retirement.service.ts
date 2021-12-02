import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, of } from "rxjs";
import { Request, RequestResponse } from 'src/app/interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class RetirementService {

  constructor(private http: HttpClient) { }

  request(equipment: Request)  {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200/'}); 
    
    return  this.http.post<RequestResponse>(`api/Retirement?clientId=${equipment.clientId}&mark=${equipment.mark}&model=${equipment.model}&failure=${equipment.failure}` 
    ,equipment).pipe(
      catchError( res => of(res.error))
    );
  }
}
