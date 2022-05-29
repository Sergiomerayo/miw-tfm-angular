import { Component, OnInit } from '@angular/core';
import {of} from "rxjs";
import {TimeRegistrationService} from "../../shared/services/time-registration.service";
import {MatDialog} from "@angular/material/dialog";
import {TimeRegistrationUpdatingDialogComponent} from "./time-registration-updating-dialog/time-registration-updating-dialog.component";

@Component({
  selector: 'app-time-registration',
  templateUrl: './time-registration.component.html',
  styleUrls: ['./time-registration.component.css']
})
export class TimeRegistrationComponent implements OnInit {

  registrations = of(<any> []);

  columnsHeader: Array<string> = ["identifier", "entryHour", "leaveHour", "actions"];
  constructor(private dialog: MatDialog, private timeRegistrationService: TimeRegistrationService) { }

  ngOnInit(): void {
    this.registrations = this.timeRegistrationService.searchAll();
  }

  update(timeRegistration: any) {
    this.dialog.open(TimeRegistrationUpdatingDialogComponent, {data: timeRegistration});
  }

  entry() {
    this.timeRegistrationService.entry(new Date());
  }

  leave() {
    this.timeRegistrationService.leave(new Date());
  }
}
