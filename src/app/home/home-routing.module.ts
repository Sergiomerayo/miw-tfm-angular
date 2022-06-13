import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EmployeesComponent} from "../manage/employees/employees.component";
import {HomeComponent} from "./home.component";
import {ReportFeedbackComponent} from "./report-feedback/report-feedback.component";
import {TimeRegistrationComponent} from "./time-registration/time-registration.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      //{path: 'employees', component: EmployeesComponent},
      {path: 'feedback', component: ReportFeedbackComponent},
      {path: 'time-registration', component: TimeRegistrationComponent},
      {path: '**', redirectTo: '', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
