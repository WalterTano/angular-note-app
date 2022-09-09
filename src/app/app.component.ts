import { Component } from '@angular/core';
import { Note } from './Note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'note-app';
  nota = {id: '524398', clase: 'Cielo', titulo: 'asdasd', ciudad: '-11;100', cuerpo: 'asdasdasd'};

  mostrar($event: Note) {
    console.log($event);
    console.log(this.nota);
  }
}
