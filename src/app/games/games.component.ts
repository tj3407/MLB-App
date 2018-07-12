import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: any;
  weekDay: string;
  dayOfWeek = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  };
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    const d = new Date();
    const objKey = d.getDay();
    console.log(objKey);
    const date = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
    this.weekDay = this.dayOfWeek[objKey] + ' ' + date;
    this.dataService.getSchedule(date).subscribe( (games) => {
      console.log('component', games);
      this.games = games;
    });
  }

}
