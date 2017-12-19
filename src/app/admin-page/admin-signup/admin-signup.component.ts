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
             alert('Sorry! Something went wrong.');
             console.log('Sign up error');
             console.log(err);
         });
   }

}
