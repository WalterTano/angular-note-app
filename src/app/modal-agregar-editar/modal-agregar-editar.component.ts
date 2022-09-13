import { NotasService } from './../notas.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Ciudad } from '../Ciudad';
import { Color } from '../Color';
import { Note, EmptyNote } from '../Note';

@Component({
  selector: 'app-modal-agregar-editar',
  templateUrl: './modal-agregar-editar.component.html',
  styleUrls: ['./modal-agregar-editar.component.sass']
})
export class ModalAgregarEditarComponent implements OnInit {
  @Input() notaEntrada?: Note;

  nota: EmptyNote = new EmptyNote();
  titulo: string = 'Agregar Nota';
  textoBoton: string = 'Agregar';

  // Datos mockeados
  ciudades: Ciudad[] = [
    { nombre: 'Buenos Aires', lat: '-34,6118', long: '-58,4173' },
    { nombre: 'Montevideo', lat: '-34,8941', long: '-56,0675' },
    { nombre: 'Paris', lat: '48,8567', long: '2,3510' },
    { nombre: 'Tokyo', lat: '35,6785', long: '139,6823' },
    { nombre: 'New York', lat: '41,6785', long: '-139,6823' }
  ];
  colores: Color[] = [
    { nombre: 'Rojo', selector: 'btnRed' },
    { nombre: 'Verde', selector: 'btnGreen' },
    { nombre: 'Amarillo', selector: 'btnYellow' },
    { nombre: 'Cielo', selector: 'btnSky' }
  ];
  // ----------------

  constructor(public modalActivo: NgbActiveModal, private servicioNotas: NotasService) { }

  ngOnInit(): void {
    if (this.notaEntrada) {
      this.titulo = 'Editar Nota';
      this.textoBoton = 'Editar';
      this.nota = { ...this.notaEntrada };
    }
  }

  guardarNota() {
    if (!this.nota.id) {
      this.servicioNotas.crearNota(this.nota);
    } else {
      this.servicioNotas.editarNota(this.nota);
    }
    this.modalActivo.close();
  }
}
