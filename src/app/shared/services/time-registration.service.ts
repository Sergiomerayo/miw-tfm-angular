import { Injectable } from '@angular/core';
import {HttpService} from "../../core/http.service";
import {of} from "rxjs";
import {TimeRegistration} from "../models/time-registration.model";
import {EndPoints} from "../end-points";

@Injectable({
  providedIn: 'root'
})
export class TimeRegistrationService {

  constructor(private httpService: HttpService) { }

  entry(registration: TimeRegistration) {
    return this.httpService.post(EndPoints.TIME_REGISTRATIONS, registration); //Create new row on DB
  }

  leave(id: string) {
    return this.httpService.patch(EndPoints.TIME_REGISTRATIONS + '/' + id + EndPoints.TIME_REGISTRATIONS_LEAVE);
  }

  searchAll() {
    return this.httpService.get(EndPoints.TIME_REGISTRATIONS_SEARCH);
  }

  update(timeRegistry: TimeRegistration) {
    return of([]);
  }
}
