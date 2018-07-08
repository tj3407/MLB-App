import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { PlayerlistComponent } from './playerlist/playerlist.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TeamsComponent},
  { path: ':id', component: PlayerlistComponent},
  { path: 'player/:id', component: PlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
