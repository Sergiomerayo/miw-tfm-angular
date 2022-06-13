import {NgModule} from '@angular/core';

import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {EmployeesComponent} from "../manage/employees/employees.component";
import {FooterComponent} from "../shared/footer/footer.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { EmployeeCreationUpdatingDialogComponent } from '../manage/employees/employee-creation-updating-dialog/employee-creation-updating-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {CommonModule} from "@angular/common";
import {ScrollingModule} from "@angular/cdk/scrolling";
import { ReportFeedbackComponent } from './report-feedback/report-feedback.component';
import { TimeRegistrationComponent } from './time-registration/time-registration.component';
import { TimeRegistrationUpdatingDialogComponent } from './time-registration/time-registration-updating-dialog/time-registration-updating-dialog.component';


@NgModule({
  declarations: [

    HomeComponent,
    //EmployeesComponent,
    FooterComponent,
    //EmployeeCreationUpdatingDialogComponent,
    ReportFeedbackComponent,
    TimeRegistrationComponent,
    TimeRegistrationUpdatingDialogComponent,

  ],
  imports: [
    RouterModule,
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    ScrollingModule,
    ReactiveFormsModule
  ],
})
export class HomeModule {

}
