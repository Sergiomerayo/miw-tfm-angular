import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EmployeesComponent} from "./employees/employees.component";
import {HomeComponent} from "./home.component";
import {ReportFeedbackComponent} from "./report-feedback/report-feedback.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'employees', component: EmployeesComponent},
      {path: 'feedback', component: ReportFeedbackComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
