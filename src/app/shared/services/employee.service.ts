import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

import {HttpService} from "../../core/http.service";
import {EmployeeSearch} from "../models/employee-search.model";
import {Employee} from "../models/employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpService: HttpService) { }

  search(employeeSearch: EmployeeSearch): Observable<Employee[]> {
    return of([{identifier:"1", salary:100000, category:"senior", name:"sergio"},
      {identifier:"1", salary:100000, category:"senior", name:"sergio"},
      {identifier:"1", salary:100000, category:"senior", name:"sergio"},
      {identifier:"1", salary:100000, category:"senior", name:"sergio"}
    ]);
  }
}
