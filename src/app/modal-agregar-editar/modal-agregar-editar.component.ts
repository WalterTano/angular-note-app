import { Component, OnInit } from '@angular/core';

import { Ciudad } from '../Ciudad';
import { Color } from '../Color';

@Component({
  selector: 'app-modal-agregar-editar',
  templateUrl: './modal-agregar-editar.component.html',
  styleUrls: ['./modal-agregar-editar.component.sass']
})
export class ModalAgregarEditarComponent implements OnInit {
  modo: 'Agregar' | 'Editar' = 'Agregar';
  titulo: string = 'Agregar Nota';
  textoBoton: string = 'Agregar';

  ciudades: Ciudad[] = [
    { nombre: 'Buenos Aires', lat: '', long: '' },
    { nombre: 'Montevideo', lat: '', long: '' },
    { nombre: 'Paris', lat: '', long: '' },
    { nombre: 'Tokyo', lat: '', long: '' }
  ];

  colores: Color[] = [
    { nombre: 'Verde', selector: '' },
    { nombre: 'Amarillo', selector: '' },
    { nombre: 'Cielo', selector: '' }
  ];

  constructor() { }

  ngOnInit(): void {
    if (this.modo === 'Editar') {
      this.titulo = 'Editar Nota';
      this.textoBoton = 'Editar';
    }
  }

}
