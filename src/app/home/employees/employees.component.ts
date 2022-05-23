import { Component, OnInit } from '@angular/core';
import {EmployeeSearch} from "../../shared/models/employee-search.model";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{
  identifier: number | undefined;
  employeeSearch: EmployeeSearch = {};
  employees = [];
  newComment: string | undefined;
  title = 'Employees Company';
  columnsHeader: Array<string> = ["identifier", "name", "category", "actions"];

  constructor() {
    this.resetSearch();
  }

  search(): void {
    //this.requests = this.technicalSupportService.search(this.technicalSupportSearch);
  }

  resetSearch(): void {
    this.employeeSearch = {};
  }

  create(): void {
    //this.dialog.open(TechnicalSupportCreationUpdatingDialogComponent);
  }

  read(/*technicalSupportRequest: TechnicalSupportRequest*/) {
    /*this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Technical Request details',
        object: this.technicalSupportService.read(technicalSupportRequest.identifier)
      }
    });*/

  }
  update(employee: string) {
    /*this.technicalSupportService.read(technicalSupportRequest.identifier)
      .subscribe(fullRequest => this.dialog.open(TechnicalSupportCreationUpdatingDialogComponent, {data: fullRequest}));
  */
  }

  ngOnInit(): void {
    //this.requests = this.technicalSupportService.search(this.technicalSupportSearch);
  }

}
