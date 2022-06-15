import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {CognitoUserPool} from "amazon-cognito-identity-js";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuth(): boolean {
    var isAuth = false;
    var poolData = {
      UserPoolId: environment.UserPoolId,
      ClientId: environment.ClientId,
    };
    var userPool = new CognitoUserPool(poolData);
    var currentUser = userPool.getCurrentUser();
    if (currentUser != null) {
      currentUser.getSession((err:any, session: any) => {
        if (err) {
          alert(err.message || JSON.stringify(err));
        }
        isAuth = session.isValid();
      });
    }
    return isAuth;
  }

  getToken(): any {
    for (let i = 0; i < localStorage.length; i++ ) {
      // @ts-ignore
      if(localStorage.key(i).endsWith(environment.ACCESS_TOKEN) && localStorage.key(i).includes(environment.ClientId)) {
        return localStorage.getItem(<string>localStorage.key(i));
      }
    }
    return null;
  }

  getUsername(): any{
    for (let i = 0; i < localStorage.length; i++ ) {
      // @ts-ignore
      if(localStorage.key(i).endsWith(environment.LAST_USER)) {
        return localStorage.getItem(<string>localStorage.key(i));
      }
    }
    return null;
  }

  isAdmin(): boolean {
    let token = this.getToken();
    let payload = token.split('.')[1];
    let payloadDecoded = atob(payload);
    let values = JSON.parse(payloadDecoded);
    let roles = values['cognito:groups'];

    return roles.indexOf('ROLE_ADMIN') >= 0;
  }
}
