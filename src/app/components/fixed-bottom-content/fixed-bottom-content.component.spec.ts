import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedBottomContentComponent } from './fixed-bottom-content.component';

describe('FixedBottomContentComponent', () => {
  let component: FixedBottomContentComponent;
  let fixture: ComponentFixture<FixedBottomContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedBottomContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedBottomContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
