import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Team } from './team';
import { Jsonp } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private base =
  'http://api.sportradar.us/mlb/trial/v6.5/en/seasons/2018/REG/standings.json?api_key=xksck7ynayqv8zxpu3t67ted&callback=JSONP_CALLBACK';

  private basePlayers =
  'http://api.sportradar.us/mlb/trial/v6.5/en/teams';

  private basePlayer =
  'http://api.sportradar.us/mlb/trial/v6.5/en/players';

  constructor(private http: HttpClient, private _http: Http) { }

  getTeams() {
    console.log('service');
    return this.http.get(this.base);
  }

  getPlayers(id) {
    console.log(id);
    return this.http.get(`${this.basePlayers}/${id}/profile.json?api_key=xksck7ynayqv8zxpu3t67ted`);
  }

  getPlayer(id) {
    console.log(id);
    return this.http.get(`${this.basePlayer}/${id}/profile.json?api_key=xksck7ynayqv8zxpu3t67ted`);
  }
}
