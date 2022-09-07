import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-agregar-editar',
  templateUrl: './modal-agregar-editar.component.html',
  styleUrls: ['./modal-agregar-editar.component.css']
})
export class ModalAgregarEditarComponent implements OnInit {
  titulo: string = 'Agregar Nota';
  textoBoton: string = 'Agregar';
  modo: 'Agregar' | 'Editar' = 'Agregar';

  constructor() { }

  ngOnInit(): void {
    if (this.modo === 'Editar') {
      this.titulo = 'Editar Nota';
      this.textoBoton = 'Editar';
    }
  }

}
