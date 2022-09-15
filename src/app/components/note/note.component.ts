import { AddEditNoteModalComponent } from '../add-edit-note-modal/add-edit-note-modal.component';
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Note } from '../../interfaces/Note';
import { DeleteNoteModalComponent } from '../delete-note-modal/delete-note-modal.component';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnInit {
  @Input() note!: Note;
  constructor(public modalService: NgbModal,
              public darkModeService: DarkModeService) { }

  ngOnInit(): void {
  }

  openEditModal() {
    const modal = this.modalService.open(AddEditNoteModalComponent);
    (modal.componentInstance as AddEditNoteModalComponent).inputNote = this.note;
  }

  openDeleteModal($event: Event) {
    $event.stopPropagation();
    const modal = this.modalService.open(DeleteNoteModalComponent);
    (modal.componentInstance as DeleteNoteModalComponent).noteId = this.note.id;
  }
}
