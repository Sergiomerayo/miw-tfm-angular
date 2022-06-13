import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home.component";
import {ReportFeedbackComponent} from "./report-feedback/report-feedback.component";
import {TimeRegistrationComponent} from "./time-registration/time-registration.component";
import {EmployeesComponent} from "./manage/employees/employees.component";
import {EmployeesGuard} from "../core/guards/employees.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'feedback', component: ReportFeedbackComponent},
      {path: 'time-registration', component: TimeRegistrationComponent},
      {path: 'employees', component: EmployeesComponent, canActivate: [EmployeesGuard]},
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
