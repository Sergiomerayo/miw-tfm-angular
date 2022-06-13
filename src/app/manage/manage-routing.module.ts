import {RouterModule, Routes} from "@angular/router";
import {ManageComponent} from "./manage.component";
import {NgModule} from "@angular/core";
import {EmployeesComponent} from "./employees/employees.component";

const routes: Routes = [
  {
    path: '',
    component: ManageComponent,
    children: [
      {path: 'employees', component: EmployeesComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ManageRoutingModule{

}
