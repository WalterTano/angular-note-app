import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../Note';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnInit {
  
  @Input() note?: Note;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModal(){
    this.modalService.open(ModalEliminarComponent);
  }

}
