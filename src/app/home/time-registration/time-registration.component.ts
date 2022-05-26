import { Component, OnInit } from '@angular/core';
import {of} from "rxjs";
import {TimeRegistrationService} from "../../shared/services/time-registration.service";

@Component({
  selector: 'app-time-registration',
  templateUrl: './time-registration.component.html',
  styleUrls: ['./time-registration.component.css']
})
export class TimeRegistrationComponent implements OnInit {

  registrations = of(<any> []);

  columnsHeader: Array<string> = ["identifier", "entryHour", "leaveHour"];
  constructor(private timeRegistrationService: TimeRegistrationService) { }

  ngOnInit(): void {
  }


  entry() {
    this.timeRegistrationService.entry(new Date());
  }
}
