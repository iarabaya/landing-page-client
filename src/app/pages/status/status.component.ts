import { Component } from '@angular/core';
import { EquipmentService } from '../../services/equipment/equipment.service';

export interface EquipmentItem {
  fecha: string;
  marca: string;
  modelo: string;
  equipo: number;
  envio: number;
}

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.sass']
})
export class StatusComponent {
  displayedColumns: string[] = ['fecha', 'marca', 'modelo', 'equipo','envio'];
  dataSource : EquipmentItem[] = [];

  constructor(private equipmentService: EquipmentService){}

  getStatus(){
    const clientId = parseInt(localStorage.getItem('clientId') || '1');

    const parseDate = (date: string) => {
      const newDate = new Date(date);
      return newDate.toLocaleString('es-ES', {month:'numeric', day:'numeric'})
    }

    this.equipmentService.getEquipment(clientId).subscribe(
      res => {
        console.log(res)
        res.forEach(e => {
          const item: EquipmentItem = {
            fecha: parseDate(e.travelEquipmentDTOs[0].operationDate),
            marca: e.mark || '',
            modelo: e.model || '',
            equipo: e.travelEquipmentDTOs.length > 1? e.travelEquipmentDTOs[1].statusTravel : e.travelEquipmentDTOs[0].statusTravel ,
            envio: e.travelEquipmentDTOs.length > 1? e.travelEquipmentDTOs[1].statusTravel : e.travelEquipmentDTOs[0].statusTravel
          }
          this.dataSource.push(item)
        });
      }
    )
  }
}
