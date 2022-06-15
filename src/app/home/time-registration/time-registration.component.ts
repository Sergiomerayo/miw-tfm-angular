import { Component, OnInit } from '@angular/core';
import {of} from "rxjs";
import {TimeRegistrationService} from "../../shared/services/time-registration.service";
import {MatDialog} from "@angular/material/dialog";
import {TimeRegistrationUpdatingDialogComponent} from "./time-registration-updating-dialog/time-registration-updating-dialog.component";
import {TimeRegistration} from "../../shared/models/time-registration.model";
import {AuthService} from "../../core/auth.service";

@Component({
  selector: 'app-time-registration',
  templateUrl: './time-registration.component.html',
  styleUrls: ['./time-registration.component.css']
})
export class TimeRegistrationComponent implements OnInit {

  registrations = of(<any> []);
  registration: TimeRegistration;
  alreadyEnter: Boolean;
  isAdmin: Boolean;

  columnsHeader: Array<string> = ["entryHour", "leaveHour", "actions"];
  constructor(private dialog: MatDialog, private timeRegistrationService: TimeRegistrationService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.alreadyEnter = false;
    this.isAdmin = this.authService.isAdmin();
    if(this.isAdmin){
      this.registrations = this.timeRegistrationService.searchAll();
    }else{
      this.registrations = this.timeRegistrationService.searchById(this.authService.getUsername());
    }

  }

  update(timeRegistration: any) {
    this.dialog.open(TimeRegistrationUpdatingDialogComponent, {data: timeRegistration});
  }

  entry() {
    let registrationEntry: TimeRegistration = {id: "", entry: new Date(), leave: undefined, idEmployee: this.authService.getUsername()};
    this.timeRegistrationService.entry(registrationEntry).subscribe(value => this.registration = value.body);
    this.alreadyEnter = true;
  }

  leave() {
    this.alreadyEnter = false;
    this.timeRegistrationService.leave(this.registration.id).subscribe(value => window.location.reload());
  }
}
