import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

export class Player {
   // sign up form
   fullName: string;
   phone: string;
   username: string;
   nationality: string;
   position: string;

   // sign up & log in forms
   email: string;
   password: string;

   // assigned by the database
   _id: string;
   admin: boolean;
   createdAt: string;
   updatedAt: string;
 }

@Injectable()
export class PlayerApiService {

  currentUser: Player;

  constructor(private httpThang: HttpClient) { }

  postPlayerSignup(userInfo: Player) {
      return this.httpThang.post(
          `${environment.backendUrl}/api/signup/player`,
          userInfo,
          {  withCredentials: true }
        )
        .toPromise()
        .then((apiResult: any) => {
            // update "currentUser" since we are logged in
            this.currentUser = apiResult.userInfo;
            // return "apiResult" for the component
            return apiResult;
        });
  }

  postPlayerLogin(userInfo: Player) {
      return this.httpThang.post(
          `${environment.backendUrl}/api/login/player`,
          userInfo,
          { withCredentials: true }
        )
        .toPromise()
        .then((apiResult: any) => {
            // update "currentUser" since we are logged in
            this.currentUser = apiResult.userInfo;
            // return "apiResult" for the component
            return apiResult;
        });
  }

  logOut() {
      return this.httpThang.delete(
        `${environment.backendUrl}/api/logout`,
        { withCredentials: true }
      )
      .toPromise()
      .then((apiResult) => {
        this.currentUser = null;

        return apiResult;
      });
  }

  getCheckLogin() {
      return this.httpThang.get(
        `${environment.backendUrl}/api/checklogin`,

        { withCredentials: true }
      )
      .toPromise()
      .then((apiResult: any) => {
        this.currentUser = apiResult.userInfo;
        return apiResult;
      });
    }

}
