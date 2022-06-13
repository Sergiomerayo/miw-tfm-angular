import {NgModule} from "@angular/core";
import {EmployeesComponent} from "./employees/employees.component";
import {EmployeeCreationUpdatingDialogComponent} from "./employees/employee-creation-updating-dialog/employee-creation-updating-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ManageRoutingModule} from "./manage-routing.module";

@NgModule({
  declarations:[
    EmployeesComponent,
    EmployeeCreationUpdatingDialogComponent
  ],
  imports: [
    ManageRoutingModule,
    MatDialogModule,
    ScrollingModule,
    MatFormFieldModule

  ]
})

export class ManageModule{

}
