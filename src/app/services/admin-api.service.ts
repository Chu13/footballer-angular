import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

export class Admin {
   // sign up form
   placeName: string;
   phone: string;
   location: string;
   fields: string;

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
export class AdminApiService {

  currentUser: Admin;

  constructor(private httpThang: HttpClient) { }


  postSignup(userInfo: Admin) {
      return this.httpThang.post(
          `${environment.backendUrl}/api/signup`,
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

  postLogin(userInfo: Admin) {
      return this.httpThang.post(
          `${environment.backendUrl}/api/login`,
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
        console.log(apiResult);
        this.currentUser = apiResult.userInfo;
        return apiResult;
      });
  }

}
