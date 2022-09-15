import { Component, OnInit } from '@angular/core';

import { NotesService } from '../../services/notes.service';
import { Note } from '../../interfaces/Note';

@Component({
  selector: 'app-note-grid',
  templateUrl: './note-grid.component.html',
  styleUrls: ['./note-grid.component.sass']
})
export class NoteGridComponent implements OnInit {
  notes: Map<string, Note>;

  constructor(private notesService: NotesService) {
    if (this.notesService.notas) {
      this.notes = this.notesService.notas;
    } else {
      this.notes = new Map<string, Note>();
    }
  }

  ngOnInit(): void {  }

}
