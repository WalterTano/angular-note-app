import { TemperatureService } from './temperature.service';
import { Note } from './Note';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  notas?: Map<string, Note>;

  constructor(private servicioTemperatura: TemperatureService) {
    this.notas = new Map<string, Note>();
  }

  obtenerNota(id: string): Note | undefined {
    if (this.notas) {
      return this.notas.get(id);
    }
    return undefined;
  }

  eliminarNota(id: string) {
    if (this.notas) {
      this.notas.delete(id);
    }
  }

  crearNota(nota: Note) {
    if (this.notas) {
      nota.id = `${Math.floor(Math.random() * 1000000)}`;
      this.notas.set(nota.id, nota);
    }
  }

  editarNota(nota: Note) {
    if (this.notas) {
      this.notas.set(nota.id, nota);
    }
  }
}
