import { Component, OnInit } from '@angular/core';
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { environment} from "../../environments/environment";
import { Router } from '@angular/router';
import {AuthService} from "../core/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  attributes: CognitoUserAttribute[];
  poolData = {
    UserPoolId: environment.UserPoolId,
    ClientId: environment.ClientId,
  };
  isAdmin: Boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
  }

  onLogout(): void {
    var userPool = new CognitoUserPool(this.poolData);
    var currentUser = userPool.getCurrentUser();
    // @ts-ignore
    currentUser.signOut();
    this.router.navigate(['']);
  }

}
