import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { PlayerlistComponent } from './playerlist/playerlist.component';
import { PlayerComponent } from './player/player.component';
import { GamesComponent } from './games/games.component';
import { BoxscoreComponent } from './boxscore/boxscore.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TeamsComponent},
  { path: 'games', component: GamesComponent},
  { path: ':id', component: PlayerlistComponent},
  { path: 'player/:id', component: PlayerComponent},
  { path: 'games/boxscore/:id', component: BoxscoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
