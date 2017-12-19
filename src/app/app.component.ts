import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminApiService } from './services/admin-api.service';
import { PlayerApiService } from './services/player-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor (
    private adminThang: AdminApiService,
      private routerThang: Router,
      private playerThang: PlayerApiService
  ) {}


  ngOnInit() {
    this.adminThang.getCheckLogin()
        // no ".then()" because "getCheckLogin()"
        // already has ".then()" that what we need
        .catch(() => {
          alert("Sorry! Something went wrong.")
        });

    this.playerThang.getCheckLogin()
        // no ".then()" because "getCheckLogin()"
        // already has ".then()" that what we need
        .catch((err) => {
          console.log(err);
          alert("Sorry! Something went wrong.")
        });
  }

  startLogOut() {
    this.adminThang.logOut()
    .then(() => {
      this.routerThang.navigate['']
    })
    .catch((err) => {
      alert("Sorry! Something went wrong.");
      console.log("Log Out Error");
      console.log(err);
  });

  }

}
