import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayerlistComponent } from './playerlist/playerlist.component';
import { PlayerComponent } from './player/player.component';

import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { GamesComponent } from './games/games.component';
import { BoxscoreComponent } from './boxscore/boxscore.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    PlayerlistComponent,
    PlayerComponent,
    NavigationComponent,
    GamesComponent,
    BoxscoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    JsonpModule,
    CommonModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
