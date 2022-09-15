import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DarkModeService } from 'src/app/services/dark-mode.service';

import { Ciudad } from '../../interfaces/Ciudad';
import { Note, EmptyNote } from '../../interfaces/Note';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-add-edit-note-modal',
  templateUrl: './add-edit-note-modal.component.html',
  styleUrls: ['./add-edit-note-modal.component.sass']
})
export class AddEditNoteModalComponent implements OnInit {
  @Input() inputNote?: Note;

  note: EmptyNote = new EmptyNote();
  title: string = 'Agregar Nota';
  buttonText: string = 'Agregar';

  // Datos mockeados
  cities: Ciudad[] = [
    { nombre: 'Buenos Aires', lat: '-34,6118', long: '-58,4173' },
    { nombre: 'Montevideo', lat: '-34,8941', long: '-56,0675' },
    { nombre: 'Paris', lat: '48,8567', long: '2,3510' },
    { nombre: 'Tokyo', lat: '35,6785', long: '139,6823' },
    { nombre: 'New York', lat: '41,6785', long: '-139,6823' }
  ];

  get colorScheme(): 'primary' | 'secondary' {
    return this.darkModeService.isDarkMode ? 'secondary' : 'primary';
  }

  constructor(private activeModal: NgbActiveModal,
              private notesService: NotesService,
              public darkModeService: DarkModeService) { }

  ngOnInit(): void {
    if (this.inputNote) {
      this.title = 'Editar Nota';
      this.buttonText = 'Editar';
      this.note = { ...this.inputNote };
    }
  }

  saveNote() {
    if (!this.note.id) {
      this.notesService.crearNota(this.note);
    } else {
      this.notesService.editarNota(this.note);
    }
    this.activeModal.close();
  }

  dismiss() {
    this.activeModal.dismiss();
  }
}
