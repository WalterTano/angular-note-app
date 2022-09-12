import { ModalAgregarEditarComponent } from './../modal-agregar-editar/modal-agregar-editar.component';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Note } from '../Note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnInit {

  @Input() note?: Note;
  constructor(public modalService: NgbModal) { }

  ngOnInit(): void {
  }

  abrirModalEditar() {
    const modal = this.modalService.open(ModalAgregarEditarComponent);
    (modal.componentInstance as ModalAgregarEditarComponent).notaEntrada = this.note;
  }
}
