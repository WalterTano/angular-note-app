import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditNoteModalComponent } from './components/add-edit-note-modal/add-edit-note-modal.component';
import { Note } from './interfaces/Note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'note-app';
  nota: Note = { temperatura: '12', fechaFormateada: '2018-06-12T19:30', id: '524398', clase: 'Cielo', titulo: 'asdasd', ciudad: '-11;100', cuerpo: 'asdasdasd'};

  mostrar($event: Note) {
    console.log($event);
    console.log(this.nota);
  }

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(AddEditNoteModalComponent);
    modalRef.componentInstance.notaEntrada = this.nota;
  }
}
