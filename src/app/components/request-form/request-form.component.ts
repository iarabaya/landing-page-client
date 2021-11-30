import { Component} from '@angular/core';
import { RetirementService, Equipment } from 'src/app/services/retirement/retirement.service';
import { FormGroup, FormControl, FormGroupDirective, Validators} from '@angular/forms';
@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.sass']
})
export class RequestFormComponent  {

  constructor (private retirementService: RetirementService) { }

  requestForm = new FormGroup({
    mark: new FormControl('', [Validators.required]),
    model: new FormControl('', [Validators.required]),
    failure: new FormControl('', [Validators.required])
  })
  
  
  equipment: Equipment = {
    clienteId: 18,
    mark: '',
    model: '',
    failure: ''
  }
  
  requestRetirement( formDirective: FormGroupDirective){
    console.log('has solicitado el retiro de tu equipo');
    console.warn(this.requestForm.value);
  
    this.equipment = this.requestForm.value;
  
    this.retirementService.request(this.equipment).subscribe( res => {
      console.log(res)
    })
  
    formDirective.resetForm();
    this.requestForm.reset();
  }
}
