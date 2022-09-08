import { Component, OnInit } from '@angular/core';
import { Note } from '../Note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnInit {
  note: Note = {
    id: "id",
    clase: "clase",
    titulo: "titulo",
    ciudad: "ciudad",
    cuerpo: "cuerpo",
    temperatura: "temperatura",
    fechaFormateada: "fechaform"

  };
  constructor() { }

  ngOnInit(): void {
  }

}
