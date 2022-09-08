import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-agregar-editar',
  templateUrl: './modal-agregar-editar.component.html',
  styleUrls: ['./modal-agregar-editar.component.sass']
})
export class ModalAgregarEditarComponent implements OnInit {
  titulo: string = 'Agregar Nota';
  textoBoton: string = 'Agregar';
  modo: 'Agregar' | 'Editar' = 'Agregar';
  ciudades: string[] = [
    'Buenos Aires',
    'Montevideo',
    'Paris',
    'Tokyo',
  ];
  colores: string[] = [
    'Verde',
    'Amarillo',
    'Cielo'
  ]

  constructor() { }

  ngOnInit(): void {
    if (this.modo === 'Editar') {
      this.titulo = 'Editar Nota';
      this.textoBoton = 'Editar';
    }
  }

}
