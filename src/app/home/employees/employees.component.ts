import { Component, OnInit } from '@angular/core';
import {EmployeeSearch} from "../../shared/models/employee-search.model";
import {of} from "rxjs";
import {EmployeeService} from "../../shared/services/employee.service";

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

  constructor(private employeeService: EmployeeService) {
    this.resetSearch();
  }

  search(): void {
  }

  resetSearch(): void {
    this.employeeSearch = {};
  }

  create(): void {
  }

  read() {
  }
  update(employee: string) {

  }

  ngOnInit(): void {
    this.employees = this.employeeService.search(this.employeeSearch);
  }

}
