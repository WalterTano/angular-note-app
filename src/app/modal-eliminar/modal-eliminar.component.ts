import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.sass']
})
export class ModalEliminarComponent implements OnInit {

  constructor(public modalActivo: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
