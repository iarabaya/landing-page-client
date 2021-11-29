import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  fecha: number;
  marca: string;
  modelo: number;
  equipo: string;
  envio: string;
  entregado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {fecha: 1, marca: 'Hydrogen', modelo: 1.00, equipo: 'H', envio: 'entregado', entregado: '29-11'},
  {fecha: 2, marca: 'Helium', modelo: 4.002, equipo: 'He', envio: 'entregado', entregado: '29-11'},
  {fecha: 3, marca: 'Lithium', modelo: 6.94, equipo: 'Li', envio: 'pendiente', entregado: '29-11'},
  {fecha: 4, marca: 'Beryllium', modelo: 9.012, equipo: 'Be', envio: 'entregado', entregado: '29-11'},
  {fecha: 5, marca: 'Boron', modelo: 10.81, equipo: 'B', envio: 'en camino', entregado: '29-11'},
  {fecha: 6, marca: 'Carbon', modelo: 12.01, equipo: 'C', envio: 'entregado', entregado: '29-11'},
  {fecha: 7, marca: 'Nitrogen', modelo: 14.00, equipo: 'N', envio: 'entregado', entregado: '29-11'},
  {fecha: 8, marca: 'Oxygen', modelo: 15.99, equipo: 'O', envio: 'entregado', entregado: '29-11'},
  {fecha: 9, marca: 'Fluorine', modelo: 18.99, equipo: 'F', envio: 'entregado', entregado: '29-11'},
  {fecha: 10, marca: 'Neon', modelo: 20.17, equipo: 'Ne', envio: 'entregado', entregado: '29-11'},
];

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent {
  displayedColumns: string[] = ['fecha', 'marca', 'modelo', 'equipo','envio', 'entregado'];
  dataSource = ELEMENT_DATA;
}
