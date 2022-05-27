import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  static CONNECTION_REFUSE = 0;
  static UNAUTHORIZED = 401;

  private headers: HttpHeaders | undefined;
  private params: HttpParams;
  private responseType: string | undefined;
  private successfulNotification = "";
  private errorNotification = "";

  constructor(private http: HttpClient, private snackBar: MatSnackBar, private router: Router) {
    this.resetOptions();
  }

  successful(notification = 'Successful'): HttpService {
    this.successfulNotification = notification;
    return this;
  }

  error(notification: string): HttpService {
    this.errorNotification = notification;
    return this;
  }

  post(endpoint: string, body?: object): Observable<any> {
    return this.http
      .post(endpoint, body, this.createOptions());
  }

  get(endpoint: string): Observable<any> {
    return this.http
      .get(endpoint, this.createOptions())
      .pipe(
        map(response => this.extractData(response))
      );
  }
  private extractData(response: any): any {
    const contentType = response.headers.get('content-type');
    if (contentType) {
      if (contentType.indexOf('application/pdf') !== -1) {
        const blob = new Blob([response.body], {type: 'application/pdf'});
        window.open(window.URL.createObjectURL(blob));
      } else if (contentType.indexOf('application/json') !== -1) {
        return response.body; // with 'text': JSON.parse(response.body);
      }
    } else {
      return response;
    }
  }

  put(endpoint: string, body?: object): Observable<any> {
    return this.http
      .put(endpoint, body, this.createOptions());
  }

  patch(endpoint: string, body?: object): Observable<any> {
    return this.http
      .patch(endpoint, body, this.createOptions());
  }

  delete(endpoint: string): Observable<any> {
    return this.http
      .delete(endpoint, this.createOptions());
  }

  param(key: string, value: string): HttpService {
    if (value != null) {
      this.params = this.params.append(key, value); // This class is immutable
    }
    return this;
  }

  paramsFrom(dto: any): HttpService {
    Object.getOwnPropertyNames(dto)
      .forEach(item => this.param(item, dto[item]));
    return this;
  }
  private createOptions(): any {
    const options: any = {
      headers: this.headers,
      params: this.params,
      responseType: this.responseType,
      observe: 'response'
    };
    this.resetOptions();
    return options;
  }

  private resetOptions(): void {
    this.headers = new HttpHeaders();
    this.params = new HttpParams();
    this.responseType = 'json';
  }

}
