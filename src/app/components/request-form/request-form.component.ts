import { Component} from '@angular/core';
import { RetirementService } from 'src/app/services/retirement/retirement.service';
import { FormGroup, FormControl, FormGroupDirective, Validators} from '@angular/forms';
import { Request } from '../../interfaces/interfaces';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent  {

  constructor (private retirementService: RetirementService, private router: Router) { }

  requestForm = new FormGroup({
    mark: new FormControl('', [Validators.required]),
    model: new FormControl('', [Validators.required]),
    failure: new FormControl('', [Validators.required])
  })
  
  
  equipment: Request = {
    clientId: 0,
    mark: '',
    model: '',
    failure: ''
  }
  
  requestRetirement( formDirective: FormGroupDirective){
    console.log('has solicitado el retiro de tu equipo');
  
    this.equipment = { clientId: parseInt(localStorage.getItem('clientId') || ''), ...this.requestForm.value};
  
    console.log(this.equipment);
    this.retirementService.request(this.equipment).subscribe( res => {
      console.log(res)
      if(res.id){
        Swal.fire('Operacion exitosa', `${res.creationDate}`, 'success');
      }else{
        Swal.fire('Error', res , 'error');
      }
    })
  
    formDirective.resetForm();
    this.requestForm.reset();
  }
}
