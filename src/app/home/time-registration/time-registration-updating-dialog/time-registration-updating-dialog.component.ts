import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {TimeRegistration} from "../../../shared/models/time-registration.model";
import {TimeRegistrationService} from "../../../shared/services/time-registration.service";
import {Time} from "@angular/common";

@Component({
  selector: 'app-time-registration-updating-dialog',
  templateUrl: './time-registration-updating-dialog.component.html',
  styleUrls: ['./time-registration-updating-dialog.component.css']
})
export class TimeRegistrationUpdatingDialogComponent implements OnInit {
  title: string;
  timeRegistry: TimeRegistration;
  dateTimeRegistry: Date;
  entryHour: Time;
  leaveHour: Time;

  constructor(@Inject(MAT_DIALOG_DATA) data: TimeRegistration, private timeRegistrationService: TimeRegistrationService, private dialog: MatDialog) {
    this.title = 'Time registry';
    this.dateTimeRegistry = new Date();
    this.timeRegistry = {id: "", entry: new Date(0), leave: new Date(0), idEmployee: "1"};
  }
  ngOnInit(): void {
  }

  update() {
    this.timeRegistry.entry?.setFullYear(Number(this.dateTimeRegistry.toLocaleString().split('-')[0]));
    this.timeRegistry.entry?.setMonth(Number(this.dateTimeRegistry.toLocaleString().split('-')[1])-1);
    this.timeRegistry.entry?.setDate(Number(this.dateTimeRegistry.toLocaleString().split('-')[2]));
    this.timeRegistry.leave?.setFullYear(Number(this.dateTimeRegistry.toLocaleString().split('-')[0]));
    this.timeRegistry.leave?.setMonth(Number(this.dateTimeRegistry.toLocaleString().split('-')[1])-1);
    this.timeRegistry.leave?.setDate(Number(this.dateTimeRegistry.toLocaleString().split('-')[2]));

    let entryHourString = String(this.entryHour);
    let leaveHourString = String(this.leaveHour);

    this.timeRegistry.entry?.setHours(Number(entryHourString.split(':')[0]));
    this.timeRegistry.entry?.setMinutes(Number(entryHourString.split(':')[1]));
    this.timeRegistry.leave?.setHours(Number(leaveHourString.split(':')[0]));
    this.timeRegistry.leave?.setMinutes(Number(leaveHourString.split(':')[1]));

    console.log(this.timeRegistry.entry + " - "+this.timeRegistry.leave);
    this.timeRegistrationService
      .update(this.timeRegistry)
      .subscribe(() => this.dialog.closeAll());
  }
}
