import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlayerApiService } from '../services/player-api.service';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css']
})
export class PlayerPageComponent implements OnInit {

  constructor(
    public playerThang: PlayerApiService,
    public routerThang: Router
  ) { }

  ngOnInit() {
    this.playerThang.getCheckLogin()
      // no ".then()" because "getCheckLogin()"
      // already has ".then()" that what we need
      .catch((err) => {
        alert("Sorry! Something went wrong.");
        console.log(err);
      });

    }
    startLogOut() {
      this.playerThang.logOut()
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
