import { Component, OnInit } from '@angular/core';
import {EmployeeSearch} from "../../../shared/models/employee-search.model";
import {of} from "rxjs";
import {EmployeeService} from "../../../shared/services/employee.service";
import {ReadDetailDialogComponent} from "../../../shared/dialogs/read-detail.dialog/read-detail.dialog.component";
import {Employee} from "../../../shared/models/employee.model";
import {MatDialog} from "@angular/material/dialog";
import {EmployeeCreationUpdatingDialogComponent} from "./employee-creation-updating-dialog/employee-creation-updating-dialog.component";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{
  identifier: number | undefined;
  employeeSearch: EmployeeSearch;
  employees = of(<any> []);
  newComment: string | undefined;
  title = 'Employees Company';
  columnsHeader: Array<string> = ["identifier", "name", "category", "actions"];

  constructor(private dialog: MatDialog, private employeeService: EmployeeService) {
    this.resetSearch();
  }

  search(): void {
    this.employees = this.employeeService.search(this.employeeSearch);
  }

  resetSearch(): void {
    this.employeeSearch = {employeeIdentifier: ""};
    this.employees = this.employeeService.search(this.employeeSearch);
  }

  create(): void {
    this.dialog.open(EmployeeCreationUpdatingDialogComponent);
  }

  read(employee: Employee) {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Employee details',
        object: this.employeeService.read(employee.identifier)
      }
    });
  }
  update(employee: Employee) {
    this.employeeService.read(employee.identifier)
      .subscribe(fullEmployee =>
        this.dialog.open(EmployeeCreationUpdatingDialogComponent, {data: fullEmployee}));
  }

  delete(employee: Employee){
    this.employeeService.delete(employee).subscribe(value => window.location.reload());

  }
  ngOnInit(): void {
    this.employeeSearch = {employeeIdentifier: ""};
    this.employees = this.employeeService.search(this.employeeSearch);
  }

}
