import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatchApiService, Match } from '../services/match-api.service';
import { AdminApiService, Admin } from '../services/admin-api.service';

@Component({
  selector: 'match-form',
  templateUrl: './match-form.component.html',
  styleUrls: ['./match-form.component.css']
})
export class MatchFormComponent implements OnInit {

  theMatch = new Match();

  constructor(
    public matchThang: MatchApiService,
    public adminThang: AdminApiService,
    public routerThang: Router
  ) { }

  ngOnInit() {
  }

  createMatch() {
    this.matchThang.postMatchCreate(this.theMatch)
    .then((matchFromApi) => {
      this.routerThang.navigate(['/matches', matchFromApi._id])
    })
    .catch((err) => {
      alert('Sorry! Something went wrong.');
      console.log('Match create error');
      console.log(err);
    })
  }
}
