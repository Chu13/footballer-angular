import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlayerApiService, Player } from '../../services/player-api.service'

@Component({
  selector: 'player-signup',
  templateUrl: './player-signup.component.html',
  styleUrls: ['./player-signup.component.css']
})
export class PlayerSignupComponent implements OnInit {

  thePlayer = new Player();

  constructor(
    private playerThang: PlayerApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
  }

  startPlayerSignup() {
    this.playerThang.postPlayerSignup(this.thePlayer)
    .then(() => {
      this.routerThang.navigate(['/player']);
    })
    .catch((err) => {
      alert('Sorry! Something went wrong.');
      console.log('Sign up error');
      console.log(err);
    })
  }

}
