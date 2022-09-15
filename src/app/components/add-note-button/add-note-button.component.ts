import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DarkModeService } from 'src/app/services/dark-mode.service';

import { AddEditNoteModalComponent } from '../add-edit-note-modal/add-edit-note-modal.component';

@Component({
  selector: 'app-add-note-button',
  templateUrl: './add-note-button.component.html',
  styleUrls: ['./add-note-button.component.sass']
})
export class AddNoteButtonComponent implements OnInit {

  get buttonColorScheme(): 'primary' | 'secondary' {
    return this.darkModeService.isDarkMode ? 'secondary' : 'primary';
  }

  constructor(private modalService: NgbModal,
              private darkModeService: DarkModeService) { }

  ngOnInit(): void {
  }

  openAddNoteModal() {
    this.modalService.open(AddEditNoteModalComponent);
  }
}
