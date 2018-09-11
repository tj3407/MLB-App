import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-boxscore',
  templateUrl: './boxscore.component.html',
  styleUrls: ['./boxscore.component.css']
})
export class BoxscoreComponent implements OnInit {
  boxScore: any;
  errorMessage: string;
  player: string;
  positions = {
    '1' : 'P',
    '2' : 'C',
    '3' : '1B',
    '4' : '2B',
    '5' : '3B',
    '6' : 'SS',
    '7' : 'LF',
    '8' : 'CF',
    '9' : 'RF',
    '10' : 'DH',
    '11' : 'PH',
    '12' : 'PR'
  };
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap(params => this.dataService.getBoxScore(params.get('id')))
    .subscribe(
      boxScore => {
        console.log(boxScore);
        this.boxScore = boxScore;
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

  findPlayerAway(id) {
    if (this.boxScore.game.away.lineup) {
      this.player = this.boxScore.game.away.roster.find( function(player) {
        return player.id === id;
      });
    }
    return this.player;
  }

  findPlayerHome(id) {
    if (this.boxScore.game.home.lineup) {
      this.player = this.boxScore.game.home.roster.find( function(player) {
        return player.id === id;
      });
    }
    return this.player;
  }

  getPosition(pos) {
    console.log(this.positions[pos]);
    return this.positions[pos];
  }

  getStatsAway(id) {
    if (this.boxScore.game.away.players) {
      this.player = this.boxScore.game.away.players.find( function(player) {
        return player.id === id;
      });
    }
    return this.player;
  }

  getStatsHome(id) {
    if (this.boxScore.game.home.players) {
      this.player = this.boxScore.game.home.players.find( function(player) {
        return player.id === id;
      });
    }
    return this.player;
  }

}
