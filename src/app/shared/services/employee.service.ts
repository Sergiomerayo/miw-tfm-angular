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
    return of([{identifier:"1", salary:100000, category:"senior", name:"sergio", comments:["asdasd", "fafdasdafsaf"]},
      {identifier:"2", salary:100000, category:"senior", name:"sergio", comments:["hola k ase,", "jajaja"]},
      {identifier:"1", salary:100000, category:"senior", name:"sergio", comments:[]},
      {identifier:"1", salary:100000, category:"senior", name:"sergio", comments:[]}
    ]);
  }

  read(name: string) {
    return of({identifier:"2", salary:200000, category:"junior", name:"carlos", comments: ["hola k ase,", "jajaja","asdasd", "fafdasdafsaf","asdasd", "fafdasdafsaf","asdasd", "fafdasdafsaf","asdasd", "fafdasdafsaf","asdasd", "fafdasdafsaf","asdasd", "fafdasdafsaf","asdasd", "fafdasdafsaf","asdasd", "fafdasdafsaf","asdasd", "fafdasdafsaf","asdasd", "fafdasdafsaf","asdasd", "fafdasdafsaf"]});
  }

  create(employee: Employee) {
    return of([]);
  }

  delete(employee: Employee) {
    return of([]);
  }

  update(employee: Employee) {
    return of([]);
  }
}
