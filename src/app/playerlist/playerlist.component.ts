import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Team } from '../team';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})
export class PlayerlistComponent implements OnInit {
  players: any = [];
  id: string;
  errorMessage: string;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap(params => this.dataService.getPlayers(params.get('id')))
    .subscribe(
      players => {
        console.log('got players', players);
        this.players = players;
      },
      error => {
        console.log('got an error');
        console.log(error);
        this.errorMessage = error.statusText;

        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
      }
    );

  }

}
