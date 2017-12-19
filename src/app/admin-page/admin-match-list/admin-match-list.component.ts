import { Component, OnInit } from '@angular/core';

import { MatchApiService, Match } from '../../services/match-api.service';
import { AdminApiService, Admin } from '../../services/admin-api.service';

@Component({
  selector: 'admin-match-list',
  templateUrl: './admin-match-list.component.html',
  styleUrls: ['./admin-match-list.component.css']
})
export class AdminMatchListComponent implements OnInit {

  matches: Match[] = [];

  constructor(private matchThang: MatchApiService) { }

  ngOnInit() {
    this.matchThang.getMatchesAdmin()
         .then((matchResults: Match[]) => {
             console.log("Match List API");
             console.log(matchResults);

             // THE MAGIC HAPPENS HERE
             // (assign API results to component property)
             this.matches = matchResults;
         })
         .catch((err) => {
             alert("Sorry! Something went wrong.");
             console.log("Phone List Error");
             console.log(err);
         });
  }

}
