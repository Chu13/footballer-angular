import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

export class Match {
   captain: string;
   date: string;
   length: number;
   time: string;
   field: string;
   players: string[];
   place: string;

   // these are assigned by the database
   _id: string;
   owner: string;
   location: string;
   createdAt: string;
   updatedAt: string;
 }

@Injectable()
export class MatchApiService {

    currentMatch: Match;

    constructor(private httpThang: HttpClient) { }

    getMatches() {
         return this.httpThang.get(
           `${environment.backendUrl}/api/matches`,
           { withCredentials: true}
         ).toPromise();
    }

    getMatchesAdmin() {
         return this.httpThang.get(
           `${environment.backendUrl}/api/matches/admin`,
           { withCredentials: true}
         ).toPromise();
    }

    getOneMatch(oneId: string) {
         return this.httpThang.get(
           `${environment.backendUrl}/api/matches/${oneId}`,
           { withCredentials: true}
         ).toPromise();
    }

    postMatchCreate(matchInfo: Match) {
         return this.httpThang.post(
             `${environment.backendUrl}/api/matches`,
             matchInfo,
             { withCredentials: true }
           )
           .toPromise()
           .then((apiResult: any) => {
               // update "currentUser" since we are logged in
               this.currentMatch = apiResult.matchInfo;
               // return "apiResult" for the component
               return apiResult;
           });
     }

     checkInUser(oneId: string) {
          return this.httpThang.put(
              `${environment.backendUrl}/api/matches/${oneId}/join`,
              {},
              { withCredentials: true }
            )
            .toPromise()
            // .then((apiResult: any) => {
            //     return apiResult;
            // });
      }


}
