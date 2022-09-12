import { Component, OnInit } from '@angular/core';
import { NotasService } from '../notas.service';
import { Note } from '../Note';


@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.sass']
})
export class GrillaComponent implements OnInit {
  notas: Map<string, Note>;

  constructor(private servicioNotas: NotasService) {
    if (this.servicioNotas.notas) {
      this.notas = this.servicioNotas.notas;
    } else {
      this.notas = new Map<string, Note>();
    }
  }

  ngOnInit(): void {  }

}
