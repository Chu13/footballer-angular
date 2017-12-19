import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminApiService, Admin } from '../../services/admin-api.service';

@Component({
  selector: 'admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  theAdmin = new Admin();
  errorMessage: string;

  constructor(
    private adminThang: AdminApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
  }


    startSignupAjax() {
       this.adminThang.postSignup(this.theAdmin)
         .then(() => {
             this.routerThang.navigate(['/admin']);
         })
         .catch((err) => {
           const apiResult = err.error;

           this.errorMessage = apiResult.error;

           if (!this.errorMessage) {
             this.errorMessage = "Sorry, y'all. Something went wrong.";
           }
             console.log('Sign up error');
             console.log(err);
         });
   }

}
