import { Component } from '@angular/core';
import { EquipmentService } from '../../services/equipment/equipment.service';

export interface PeriodicElement {
  fecha: number;
  marca: string;
  modelo: number;
  equipo: string;
  envio: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {fecha: 1, marca: 'Hydrogen', modelo: 1.00, equipo: 'H', envio: 'entregado'},
  {fecha: 2, marca: 'Helium', modelo: 4.002, equipo: 'He', envio: 'entregado'},
  {fecha: 3, marca: 'Lithium', modelo: 6.94, equipo: 'Li', envio: 'pendiente'},
  {fecha: 4, marca: 'Beryllium', modelo: 9.012, equipo: 'Be', envio: 'entregado'},
  {fecha: 5, marca: 'Boron', modelo: 10.81, equipo: 'B', envio: 'en camino'},
  {fecha: 6, marca: 'Carbon', modelo: 12.01, equipo: 'C', envio: 'entregado'},
  {fecha: 7, marca: 'Nitrogen', modelo: 14.00, equipo: 'N', envio: 'entregado'},
  {fecha: 8, marca: 'Oxygen', modelo: 15.99, equipo: 'O', envio: 'entregado'},
  {fecha: 9, marca: 'Fluorine', modelo: 18.99, equipo: 'F', envio: 'entregado'},
  {fecha: 10, marca: 'Neon', modelo: 20.17, equipo: 'Ne', envio: 'entregado'},
];

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.sass']
})
export class StatusComponent {
  displayedColumns: string[] = ['fecha', 'marca', 'modelo', 'equipo','envio'];
  dataSource = ELEMENT_DATA;

  constructor(private equipmentService: EquipmentService){}

  getStatus(){
    const clientId = parseInt(localStorage.getItem('clientId') || '1');
    this.equipmentService.getEquipment(clientId).subscribe(
      res => console.log(res)
    )
  }
}
