import { Component, OnInit } from '@angular/core';

import { MatchApiService, Match } from '../services/match-api.service';
import { AdminApiService, Admin } from '../services/admin-api.service';

@Component({
  selector: 'match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

  matches: Match[] = [];

  constructor(private matchThang: MatchApiService) { }

  ngOnInit() {
    this.matchThang.getMatches()
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
