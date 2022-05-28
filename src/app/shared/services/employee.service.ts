import { Injectable } from '@angular/core';
import {identity, Observable, of} from "rxjs";

import {HttpService} from "../../core/http.service";
import {EmployeeSearch} from "../models/employee-search.model";
import {Employee} from "../models/employee.model";
import {EndPoints} from "../end-points";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpService: HttpService) { }

  search(employeeSearch: EmployeeSearch): Observable<any> {
    if(employeeSearch.employeeIdentifier =="") {
      return this.httpService.get(EndPoints.EMPLOYEES_SEARCH);
    }
   else{
     return this.read(employeeSearch.employeeIdentifier);
    }
  }

  read(identifier: string) {
    return this.httpService.get(EndPoints.EMPLOYEES + '/' + identifier);
  }

  create(employee: Employee) {
    return this.httpService.post(EndPoints.EMPLOYEES, employee);
  }

  delete(employee: Employee) {
    return this.httpService.delete(EndPoints.EMPLOYEES + '/' + employee.identifier);
  }

  update(employee: Employee) {
    return of([]);
  }
}
