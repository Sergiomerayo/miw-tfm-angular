import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRegistrationUpdatingDialogComponent } from './time-registration-updating-dialog.component';

describe('TimeRegistrationUpdatingDialogComponent', () => {
  let component: TimeRegistrationUpdatingDialogComponent;
  let fixture: ComponentFixture<TimeRegistrationUpdatingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeRegistrationUpdatingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeRegistrationUpdatingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
