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
}
