import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRegistrationComponent } from './time-registration.component';

describe('TimeRegistrationComponent', () => {
  let component: TimeRegistrationComponent;
  let fixture: ComponentFixture<TimeRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
