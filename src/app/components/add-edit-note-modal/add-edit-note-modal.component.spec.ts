import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditNoteModalComponent } from './add-edit-note-modal.component';

describe('ModalAgregarEditarComponent', () => {
  let component: AddEditNoteModalComponent;
  let fixture: ComponentFixture<AddEditNoteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditNoteModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditNoteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
