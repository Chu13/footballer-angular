import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminApiService, Admin } from '../../services/admin-api.service';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  theAdmin = new Admin();
  errorMessage: string;

  constructor(
    private adminThang: AdminApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
  }

  loginAdmin() {
    this.adminThang.postLogin(this.theAdmin)
         .then(() => {
             this.routerThang.navigate(['/admin']);
             console.log("Log in Succesful");
         })
         .catch((err) => {
           const apiResult = err.error;

           this.errorMessage = apiResult.error;

           if (!this.errorMessage) {
             this.errorMessage = "Sorry, y'all. Something went wrong.";
           }
             console.log('Log in error');
             console.log(err);
         });
  }
}
