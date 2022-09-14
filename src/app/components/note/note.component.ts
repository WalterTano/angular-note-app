import { AddEditNoteModalComponent } from '../add-edit-note-modal/add-edit-note-modal.component';
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Note } from '../../interfaces/Note';
import { DeleteNoteModalComponent } from '../delete-note-modal/delete-note-modal.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnInit {
  @Input() note!: Note;
  constructor(public modalService: NgbModal) { }

  ngOnInit(): void {
  }

  abrirModalEditar() {
    const modal = this.modalService.open(AddEditNoteModalComponent);
    (modal.componentInstance as AddEditNoteModalComponent).inputNote = this.note;
  }

  openModalDelete() {
    const modal = this.modalService.open(DeleteNoteModalComponent);
    (modal.componentInstance as DeleteNoteModalComponent).noteId = this.note?.id;
  }
}
