import { Component, OnInit } from '@angular/core';

import { Ciudad } from '../Ciudad';
import { Color } from '../Color';
import { EmptyNote } from '../Note';

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
    { nombre: 'Buenos Aires', ubicacion: { lat: '', long: '' } },
    { nombre: 'Montevideo', ubicacion: { lat: '', long: '' } },
    { nombre: 'Paris', ubicacion: { lat: '', long: '' } },
    { nombre: 'Tokyo', ubicacion: { lat: '', long: '' } }
  ];
  colores: Color[] = [
    { nombre: 'Verde', selector: 'Verde' },
    { nombre: 'Amarillo', selector: 'Amarillo' },
    { nombre: 'Cielo', selector: 'Cielo' }
  ];
  nota: EmptyNote = new EmptyNote();

  constructor() { }

  ngOnInit(): void {
    if (this.modo === 'Editar') {
      this.titulo = 'Editar Nota';
      this.textoBoton = 'Editar';
    }
  }

  seleccionarColor($event: Event) {
    this.nota.clase = ($event.target as HTMLInputElement).value;
  }

  seleccionarCiudad($event: Event) {
    this.nota.ciudad = ($event.target as HTMLInputElement).value;
  }

  crearNota() {
    console.log(this.nota);
  }
}
