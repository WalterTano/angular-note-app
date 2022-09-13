import { Component, OnInit } from '@angular/core';
import { ModalAgregarEditarComponent } from '../modal-agregar-editar/modal-agregar-editar.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-boton-agregar',
  templateUrl: './boton-agregar.component.html',
  styleUrls: ['./boton-agregar.component.sass']
})
export class BotonAgregarComponent implements OnInit {


<<<<<<< HEAD
  constructor(private modalService: NgbModal) { }
  
=======
  constructor(public modalService: NgbModal) { }
>>>>>>> 08be7b14820450ae1fc924f92ee6907b5a74b5e3
  agregarNota() {
    this.modalService.open(ModalAgregarEditarComponent);
  }

  ngOnInit(): void {
  }
}
