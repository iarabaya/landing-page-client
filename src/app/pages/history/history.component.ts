import { Component } from '@angular/core';
import { EquipmentService } from '../../services/equipment/equipment.service';
export interface RecordItem {
  fecha: string;
  marca: string;
  modelo: string;
  equipo: number;
  envio: number;
  entregado: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent {
  displayedColumns: string[] = ['fecha', 'marca', 'modelo', 'equipo','envio', 'entregado'];
  dataSource: RecordItem[] = [];

  constructor(private equipmentService: EquipmentService){}

  getRecords(){
    const clientId = parseInt(localStorage.getItem('clientId') || '1');

    this.equipmentService.getEquipment(clientId).subscribe(res => {
      console.log(res);
    })
  }
}
