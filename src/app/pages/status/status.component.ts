import { I18nSelectPipe } from '@angular/common';
import { Component } from '@angular/core';
import { EquipmentService } from '../../services/equipment/equipment.service';

export interface EquipmentItem {
  fecha: string;
  marca: string;
  modelo: string;
  equipo: string;
  envio: string;
}

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.sass']
})
export class StatusComponent {
  displayedColumns: string[] = ['fecha', 'marca', 'modelo', 'equipo','envio'];
  dataSource : EquipmentItem[] = [];

  envioMap = {
    '1' : 'retiro pendiente',
    '2' : 'retiro asignado',
    '3' : 'retirado',
    '4' : 'reparacion pendiente',
    '5' : 'reparado',
    '6' : 'entrega asignada',
    '7' : 'entrega pendiente',
    '8' : 'entregado',
    '9' : 'recibido',
    '10' : 'renunciado',
  }

  estadoMap = {
    '1' : 'a reparar',
    '2' : 'a reparar',
    '3' : 'a reparar',
    '4' : 'a reparar',
    '5' : 'reparado',
    '6' : 'reparado',
    '7' : 'reparado',
    '8' : 'reparado',
    '9' : 'reparado',
    '10' : 'renunciado',
  }

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
            equipo:  e.travelEquipmentDTOs.length > 1? e.travelEquipmentDTOs[1].statusTravel.toString() : e.travelEquipmentDTOs[0].statusTravel.toString(),
            envio: e.travelEquipmentDTOs.length > 1? e.travelEquipmentDTOs[1].statusTravel.toString() : e.travelEquipmentDTOs[0].statusTravel.toString()
          }
          this.dataSource.push(item)
        });
      }
    )
  }
}
