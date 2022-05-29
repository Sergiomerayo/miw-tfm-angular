import { Component, OnInit } from '@angular/core';
import {of} from "rxjs";
import {TimeRegistrationService} from "../../shared/services/time-registration.service";
import {MatDialog} from "@angular/material/dialog";
import {TimeRegistrationUpdatingDialogComponent} from "./time-registration-updating-dialog/time-registration-updating-dialog.component";
import {TimeRegistration} from "../../shared/models/time-registration.model";

@Component({
  selector: 'app-time-registration',
  templateUrl: './time-registration.component.html',
  styleUrls: ['./time-registration.component.css']
})
export class TimeRegistrationComponent implements OnInit {

  registrations = of(<any> []);
  registration: TimeRegistration;
  alreadyEnter: Boolean;

  columnsHeader: Array<string> = ["identifier", "entryHour", "leaveHour", "actions"];
  constructor(private dialog: MatDialog, private timeRegistrationService: TimeRegistrationService) { }

  ngOnInit(): void {
    this.alreadyEnter = false;
    this.registrations = this.timeRegistrationService.searchAll();
  }

  update() {
    this.dialog.open(TimeRegistrationUpdatingDialogComponent);
  }

  entry() {
    let registrationEntry: TimeRegistration = {id: "", entry: new Date(), leave: undefined, idEmployee: "1"};
    this.timeRegistrationService.entry(registrationEntry).subscribe(value => this.registration = value.body);
    this.alreadyEnter = true;

  }

  leave() {
    this.alreadyEnter = false;
    this.timeRegistrationService.leave(this.registration.id).subscribe(value => window.location.reload());

  }
}
