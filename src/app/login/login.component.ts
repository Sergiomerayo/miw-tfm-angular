import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import { Router } from '@angular/router';
import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import {environment} from "../../environments/environment";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  email: string;
  password: string;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    var poolData = {
      UserPoolId: environment.UserPoolId,
      ClientId: environment.ClientId,
    };
    var userPool = new CognitoUserPool(poolData);

    var userData = {
      Username: this.email,
      Pool: userPool
    }
    var cognitoUser = new CognitoUser(userData);

    var authData = {
      Username: this.email,
      Password: this.password
    }
    var authDetails = new AuthenticationDetails(authData);

    cognitoUser.authenticateUser(authDetails, {
      onSuccess: (result) => {
        console.log('Token: ' + result.getAccessToken().getJwtToken());
        this.router.navigate(['/home/employees']);
      },
      onFailure: (err) => {
        alert(err.message || JSON.stringify(err));
      }
    });
  }
}
