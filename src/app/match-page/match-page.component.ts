import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { MatchApiService, Match } from '../services/match-api.service';
import { PlayerApiService, Player } from '../services/player-api.service';
import { AdminApiService, Admin }  from '../services/admin-api.service';


@Component({
  selector: 'match-page',
  templateUrl: './match-page.component.html',
  styleUrls: ['./match-page.component.css']
})
export class MatchPageComponent implements OnInit {

  matchInfo = new Match();


  constructor(
    public activatedThang: ActivatedRoute,
    public matchThang: MatchApiService,
    public adminThang: AdminApiService,
    public playerThang: PlayerApiService,
    public routerThang: Router
  ) { }

  ngOnInit() {
    this.activatedThang.params.subscribe((myReqParams) => {
               // { path: 'phones/:id'
               //                  |
           console.log(myReqParams.id);

           this.startAjaxCall(myReqParams.id);
       });

       this.adminThang.getCheckLogin()

         .catch((err) => {
           alert("Sorry! Something went wrong.");
           console.log(err);
         });

       this.playerThang.getCheckLogin()

          .catch((err) => {
             alert("Sorry! Something went wrong.");
             console.log(err);
           });


  }

  startAjaxCall(urlId) {
    this.matchThang.getOneMatch(urlId)
    .then((matchResult: Match) => {

      this.matchInfo = matchResult;
    })
    .catch((err) =>{
            alert("Sorry! Something went wrong.");
            console.log("Phone Details Error");
            console.log(err);
        });
  }




  checkIn() {
    this.matchThang.checkInUser(this.matchInfo._id)
    .then(() => {
      console.log("Adding Player succesful");
      this.routerThang.navigate(['/matches', this.matchInfo._id]);
    })
    .catch((err) => {
      alert('Sorry! Something went wrong.');
      console.log('Adding in error');
      console.log(err);
    })
  }



}
