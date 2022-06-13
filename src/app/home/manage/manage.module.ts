import {NgModule} from "@angular/core";
import {EmployeesComponent} from "./employees/employees.component";
import {EmployeeCreationUpdatingDialogComponent} from "./employees/employee-creation-updating-dialog/employee-creation-updating-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ManageRoutingModule} from "./manage-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FooterModule} from "../../shared/footer/footer.module";
import {FormsModule} from "@angular/forms";
import {ManageComponent} from "./manage.component";
import {HomeModule} from "../home.module";

@NgModule({
  declarations:[
    EmployeesComponent,
    EmployeeCreationUpdatingDialogComponent,
    ManageComponent
  ],
  imports: [
    ManageRoutingModule,
    MatDialogModule,
    ScrollingModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FooterModule,
    FormsModule,
    HomeModule
  ]
})

export class ManageModule{

}
