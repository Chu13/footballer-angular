import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlayerApiService, Player } from '../../services/player-api.service';

@Component({
  selector: 'player-login',
  templateUrl: './player-login.component.html',
  styleUrls: ['./player-login.component.css']
})
export class PlayerLoginComponent implements OnInit {

  thePlayer = new Player();

  errorMessage: string;

  constructor(
    private playerThang: PlayerApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
  }

  loginPlayer() {
    this.playerThang.postPlayerLogin(this.thePlayer)
        .then(() => {
            this.routerThang.navigate(['/player']);
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
