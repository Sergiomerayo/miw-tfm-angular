import { Injectable } from '@angular/core';
import {HttpService} from "../../core/http.service";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TimeRegistrationService {

  constructor(private httpService: HttpService) { }

  search(identifierToday: string) {
    return of([]);
  }

  entry(date: Date) {
    return of([]); //Create new row on DB
  }

  leave(date: Date) {
    return of([]); //Update row in DB
  }

  searchAll() {
    return of([{identifier: "2022101", entryHour: new Date(), leaveHour: new Date()},
      {identifier: "2022105", entryHour: new Date(), leaveHour: new Date()},
      {identifier: "2022325", entryHour: new Date(), leaveHour: new Date()}]); //findall endpoint
  }
}
