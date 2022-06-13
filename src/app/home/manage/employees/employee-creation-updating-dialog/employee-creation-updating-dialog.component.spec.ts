  import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCreationUpdatingDialogComponent } from './employee-creation-updating-dialog.component';

describe('EmployeeCreationUpdatingDialogComponent', () => {
  let component: EmployeeCreationUpdatingDialogComponent;
  let fixture: ComponentFixture<EmployeeCreationUpdatingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCreationUpdatingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCreationUpdatingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
