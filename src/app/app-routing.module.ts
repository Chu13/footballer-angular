import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPageComponent }    from './admin-page/admin-page.component';
import { AdminLoginComponent }   from './admin-page/admin-login/admin-login.component';
import { AdminSignupComponent }  from './admin-page/admin-signup/admin-signup.component';
import { CreateMatchComponent }  from './create-match/create-match.component';
import { NotFoundComponent }     from './not-found/not-found.component';
import { MatchListComponent }    from './match-list/match-list.component';
import { MatchPageComponent }    from './match-page/match-page.component';
import { PlayerLoginComponent }  from './player-page/player-login/player-login.component';
import { PlayerSignupComponent } from './player-page/player-signup/player-signup.component';
import { HomePageComponent }     from './home-page/home-page.component';
import { PlayerPageComponent }     from './player-page/player-page.component';
import { SignupPlayerComponent } from './signup-player/signup-player.component';
import { SignupAdminComponent } from './signup-admin/signup-admin.component';
import { MatchFormComponent }   from './match-form/match-form.component';

const routes: Routes = [
  { path: '',              component: HomePageComponent},
  { path: 'signup/admin',  component: SignupAdminComponent},
  { path: 'admin',         component: AdminPageComponent },
  { path: 'signup/player', component: SignupPlayerComponent},
  { path: 'player',        component: PlayerPageComponent },
  { path: 'admin/match/new',   component: CreateMatchComponent },
  { path: 'matches/:id',   component: MatchPageComponent },
  { path: '**',            component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
