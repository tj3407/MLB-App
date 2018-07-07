import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { PlayerlistComponent } from './playerlist/playerlist.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TeamsComponent},
  { path: ':id', component: PlayerlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
