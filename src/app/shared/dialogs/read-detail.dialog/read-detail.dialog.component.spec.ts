import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadDetailDialogComponent } from './read-detail.dialog.component';

describe('ReadDetailDialogComponent', () => {
  let component: ReadDetailDialogComponent;
  let fixture: ComponentFixture<ReadDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadDetailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
