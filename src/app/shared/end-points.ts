import {environment} from "../../environments/environment";

export class EndPoints {
  static EMPLOYEES = environment.DEVELOPMENT + '/employees';
  static EMPLOYEES_SEARCH= environment.DEVELOPMENT + '/employees/search';
  static FEEDBACKS = environment.DEVELOPMENT + '/feedbacks';
  static FEEDBACKS_SEARCH= environment.DEVELOPMENT + '/feedbacks/search';

  static TIME_REGISTRATIONS= environment.DEVELOPMENT + '/registrations';
  static TIME_REGISTRATIONS_SEARCH = environment.DEVELOPMENT + '/registrations/search';
  static TIME_REGISTRATIONS_LEAVE = '/leave';

}
