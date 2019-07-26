import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private base =
  'https://cors-anywhere.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/seasons/2018/REG/standings.json?api_key=fc5aesmv546paz5vtd7sfk2n&callback=JSONP_CALLBACK';

  private basePlayers =
  'https://cors-anywhere.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/teams';

  private basePlayer =
  'https://cors-anywhere.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/players';

  private baseSchedule =
  'https://cors-anywhere.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/games';

  private baseBoxScore =
  'https://cors-anywhere.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/games';

  constructor(private http: HttpClient, private _http: Http) { }

  // this.teams.next(teams.json()
  getTeams() {
    return this.http.get(this.base);
  }

  getPlayers(id) {
    console.log(id);
    return this.http.get(`${this.basePlayers}/${id}/profile.json?api_key=fc5aesmv546paz5vtd7sfk2n`);
  }

  getPlayer(id) {
    console.log(id);
    return this.http.get(`${this.basePlayer}/${id}/profile.json?api_key=fc5aesmv546paz5vtd7sfk2n`);
  }

  getSchedule(date) {
    console.log(date);
    return this.http.get(`${this.baseSchedule}/${date}/boxscore.json?api_key=fc5aesmv546paz5vtd7sfk2n`);
  }

  getBoxScore(gameId) {
    return this.http.get(`${this.baseBoxScore}/${gameId}/summary.json?api_key=fc5aesmv546paz5vtd7sfk2n`);
  }
}
