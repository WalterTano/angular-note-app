import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AddEditNoteModalComponent } from '../add-edit-note-modal/add-edit-note-modal.component';

@Component({
  selector: 'app-add-note-button',
  templateUrl: './add-note-button.component.html',
  styleUrls: ['./add-note-button.component.sass']
})
export class AddNoteButtonComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  openAddNoteModal() {
    this.modalService.open(AddEditNoteModalComponent);
  }

  ngOnInit(): void {
  }
}
