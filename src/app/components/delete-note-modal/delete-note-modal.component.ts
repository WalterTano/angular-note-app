import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DarkModeService } from 'src/app/services/dark-mode.service';

import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'delete-note-modal',
  templateUrl: './delete-note-modal.component.html',
  styleUrls: ['./delete-note-modal.component.sass']
})
export class DeleteNoteModalComponent implements OnInit {

  get colorScheme(): '' | 'btn-secondary' {
    return this.darkModeService.isDarkMode ? 'btn-secondary' : '';
  }

  @Input() noteId?: string;
  constructor(private activeModal: NgbActiveModal,
              private notesService: NotesService,
              public darkModeService: DarkModeService) { }

  ngOnInit(): void { }

  delete() {
    if (this.noteId) {
      this.notesService.eliminarNota(this.noteId);
      this.activeModal.close();
    }
  }

  dismiss() {
    this.activeModal.dismiss();
  }
}
