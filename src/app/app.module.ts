import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MatchApiService }  from './services/match-api.service';
import { AdminApiService }  from './services/admin-api.service';
import { PlayerApiService } from './services/player-api.service';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { PlayerPageComponent } from './player-page/player-page.component';
import { MatchPageComponent } from './match-page/match-page.component';
import { CreateMatchComponent } from './create-match/create-match.component';
import { PlayerLoginComponent } from './player-page/player-login/player-login.component';
import { PlayerSignupComponent } from './player-page/player-signup/player-signup.component';
import { AdminLoginComponent } from './admin-page/admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-page/admin-signup/admin-signup.component';
import { MatchListComponent } from './match-list/match-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupPlayerComponent } from './signup-player/signup-player.component';
import { SignupAdminComponent } from './signup-admin/signup-admin.component';
import { MatchFormComponent } from './match-form/match-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminPageComponent,
    PlayerPageComponent,
    MatchPageComponent,
    CreateMatchComponent,
    PlayerLoginComponent,
    PlayerSignupComponent,
    AdminLoginComponent,
    AdminSignupComponent,
    MatchListComponent,
    NotFoundComponent,
    SignupPlayerComponent,
    SignupAdminComponent,
    MatchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MatchApiService,
    AdminApiService,
    PlayerApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
