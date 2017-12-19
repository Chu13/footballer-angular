import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminApiService } from '../services/admin-api.service';

@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(
    public adminThang: AdminApiService,
    public routerThang: Router
  ) { }

  ngOnInit() {
    this.adminThang.getCheckLogin()
      // no ".then()" because "getCheckLogin()"
      // already has ".then()" that what we need
      .catch((err) => {
        alert("Sorry! Something went wrong.");
        console.log(err);
      });
  }

  startLogOut() {
  this.adminThang.logOut()
  .then(() => {
    this.routerThang.navigate(['/']);
  })
  .catch((err) => {
    alert("Sorry! Something went wrong.");
    console.log("Log Out Error");
    console.log(err);
  });


}

}
