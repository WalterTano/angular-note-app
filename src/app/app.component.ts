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

  mostrar($event: Note) {
    console.log($event);
  }

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(AddEditNoteModalComponent);
  }
}
