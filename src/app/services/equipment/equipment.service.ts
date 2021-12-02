import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { catchError, Observable, of } from "rxjs";
import { EquipmentResponse } from '../../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private http: HttpClient) { }

  getEquipment(clientId: number){
    const url = `api/Equipment?clientId=${clientId}`;
    //  let headers = new HttpHeaders({'Content-Type':'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200/'}); 
    
    return  this.http.get<EquipmentResponse[]>(url).pipe( 
        // catchError( res => of(res.error))
      );
  }
}
