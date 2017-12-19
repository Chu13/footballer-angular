import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlayerApiService, Player } from '../services/player-api.service';
import { AdminApiService, Admin }  from '../services/admin-api.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private adminThang: AdminApiService,
    private playerThang: PlayerApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
    this.adminThang.getCheckLogin()
      .then(() => {
        if (this.adminThang.currentUser) {
          this.routerThang.navigate(['/player'])
        }
      })

      .catch((err) => {
        alert("Sorry! Something went wrong.");
        console.log(err);
      });

  }

}
