import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {ReportFeedbackService} from "../../shared/services/report-feedback.service";
import {of} from "rxjs";
import {Feedback} from "../../shared/models/feedback.model";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-report-feedback',
  templateUrl: './report-feedback.component.html',
  styleUrls: ['./report-feedback.component.css']
})
export class ReportFeedbackComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.minLength(10)]);
  feedback: Feedback;
  feedbacks = of(<any> []);
  matcher = new MyErrorStateMatcher();
  columnsHeader: Array<string> = ["identifier", "feedback"];

  constructor(private reportFeedbackService: ReportFeedbackService) { }

  ngOnInit(): void {
    this.feedback = {identifier: "", feedback: ""};
    this.feedbacks = this.reportFeedbackService.search();
  }

  send() {
    this.reportFeedbackService.send(this.feedback).subscribe();
    this.feedback = {identifier: "", feedback: ""};
    this.feedbacks = this.reportFeedbackService.search();
  }

  reset() {
    this.feedbacks = this.reportFeedbackService.search();
  }

}
