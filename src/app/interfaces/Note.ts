export interface Note {
  id: string;
  titulo: string;
  ciudad: string;
  cuerpo: string;
  temperatura: string;
  fechaFormateada: string;
}

export class EmptyNote implements Note {
  id: string = '';
  titulo: string = '';
  ciudad: string = '';
  cuerpo: string = '';
  temperatura: string = '';
  fechaFormateada: string = '';

  constructor() {  }
}
