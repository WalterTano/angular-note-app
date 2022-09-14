import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNoteButtonComponent } from './add-note-button.component';

describe('AddNoteButtonComponent', () => {
  let component: AddNoteButtonComponent;
  let fixture: ComponentFixture<AddNoteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNoteButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNoteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
