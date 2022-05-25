import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {ReportFeedbackService} from "../../shared/services/report-feedback.service";

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
  feedback: string = ""
  matcher = new MyErrorStateMatcher();
  constructor(private reportFeedbackService: ReportFeedbackService) { }

  ngOnInit(): void {
  }

  send() {
    this.reportFeedbackService.send(this.feedback);
    this.feedback = "";
  }

  reset() {
    this.feedback = "";
  }

}
