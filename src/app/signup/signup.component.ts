import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from "@angular/material/core";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import {Iuser} from "../shared/models/iuser";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  email: string;
  givenName: string;
  nickname: string;
  password: string;
  matcher = new MyErrorStateMatcher();
  hide = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onRegister(): void {
    var poolData = {
      UserPoolId: environment.UserPoolId,
      ClientId: environment.ClientId,
    };
    var userPool = new CognitoUserPool(poolData);
    var attrList = [];
    var iuser: Iuser = {
      email: this.email,
      given_name: this.givenName,
      nickname: this.nickname
    }
    for (let key in iuser) {
      var attrData = {
        Name: key,
        Value: iuser[key]
      }
      var attr = new CognitoUserAttribute(attrData);
      attrList.push(attr);
    }
    // sign up
    userPool.signUp(this.email, this.password, attrList, [], (err, result) => {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      // @ts-ignore
      var newUser = result.user;
      console.log(JSON.stringify(newUser));
      alert('Te hemos enviado un correo para activar tu cuenta');
      this.router.navigate(['/login']);
    });
  }

}
