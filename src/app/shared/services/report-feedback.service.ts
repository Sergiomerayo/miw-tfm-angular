import { Injectable } from '@angular/core';
import {HttpService} from "../../core/http.service";
import {EndPoints} from "../end-points";
import {Feedback} from "../models/feedback.model";

@Injectable({
  providedIn: 'root'
})
export class ReportFeedbackService {

  constructor(private httpService: HttpService) { }

  send(feedback: Feedback) {
    return this.httpService.post(EndPoints.FEEDBACKS, feedback);
  }

  search() {
    return this.httpService.get(EndPoints.FEEDBACKS_SEARCH);
  }
}
