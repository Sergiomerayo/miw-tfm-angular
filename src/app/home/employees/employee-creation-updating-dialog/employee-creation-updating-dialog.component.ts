import {Component, Inject} from '@angular/core';
import {Employee} from "../../../shared/models/employee.model";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {EmployeeService} from "../../../shared/services/employee.service";

@Component({
  selector: 'app-employee-creation-updating-dialog',
  templateUrl: './employee-creation-updating-dialog.component.html',
  styleUrls: ['./employee-creation-updating-dialog.component.css']
})
export class EmployeeCreationUpdatingDialogComponent {
  title: string;
  employee: Employee;
  newComment: string = "";

  constructor(@Inject(MAT_DIALOG_DATA) data: Employee, private employeeService: EmployeeService, private dialog: MatDialog) {
    this.title = 'Employee';
    this.employee = data ? data : {
      identifier: "", name: "", category: "", salary: undefined, comments: [""]
    }
  }

  create(): void {
    if(this.newComment !=""){
      this.employee.comments.push(this.newComment);
    }

    this.employeeService
      .create(this.employee)
      .subscribe(() => this.dialog.closeAll());
  }

  update() {
    if(this.newComment.length > 0) {
      this.employee.comments.push(this.newComment);
    }
    this.employeeService
      .update(this.employee)
      .subscribe(() => this.dialog.closeAll());
  }

}
