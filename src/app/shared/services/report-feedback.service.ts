import { Injectable } from '@angular/core';
import {HttpService} from "../../core/http.service";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReportFeedbackService {

  constructor(private httpService: HttpService) { }

  send(feedback: string) {
    return of([]);
  }

  search() {
    return of([{identifier: "1", feedback: "I want more confortable chairs."},
      {identifier: "2", feedback: "I would like to have more flexible hours."}]);
  }
}
