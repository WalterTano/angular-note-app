import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { NotasService } from '../../services/notas.service';

@Component({
  selector: 'delete-note-modal',
  templateUrl: './delete-note-modal.component.html',
  styleUrls: ['./delete-note-modal.component.sass']
})
export class DeleteNoteModalComponent implements OnInit {

  @Input() noteId?: string;
  constructor(private activeModal: NgbActiveModal,
              private notesService: NotasService) { }

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
