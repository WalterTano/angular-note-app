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
    { nombre: 'Buenos Aires', lat: '123', long: '245' },
    { nombre: 'Montevideo', lat: '-11', long: '100' },
    { nombre: 'Paris', lat: '-115', long: '0' },
    { nombre: 'Tokyo', lat: '53', long: '-170' }
  ];
  colores: Color[] = [
    { nombre: 'Verde', selector: 'Verde' },
    { nombre: 'Amarillo', selector: 'Amarillo' },
    { nombre: 'Cielo', selector: 'Cielo' }
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
      this.nota.id = `${Math.floor(Math.random() * 1000000)}`;
      this.servicioNotas.crearNota(this.nota);
    } else {
      this.servicioNotas.editarNota(this.nota);
    }
    this.modalActivo.close();
  }
}
