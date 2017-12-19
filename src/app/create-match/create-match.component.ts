import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatchApiService, Match } from '../services/match-api.service';
import { AdminApiService, Admin } from '../services/admin-api.service';

@Component({
  selector: 'create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.css']
})
export class CreateMatchComponent implements OnInit {

  constructor(
    private matchThang: MatchApiService,
    private adminThang: AdminApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
  }


}
