import {environment} from "../../environments/environment";

export class EndPoints {
  static EMPLOYEES = environment.DEVELOPMENT + '/employees';
  static EMPLOYEES_SEARCH= environment.DEVELOPMENT + '/employees/search';

}
