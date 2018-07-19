import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  player: any;
  errorMessage: string;
  month = {
    '3': 'April',
    '4': 'May',
    '5': 'June',
    '6': 'July',
    '7': 'August',
    '8': 'September',
    '9': 'October',
    '10': 'November',
  };
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap(params => this.dataService.getPlayer(params.get('id')))
    .subscribe(
      player => {
        console.log('got player', player);
        this.player = player;
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

  objectKeys(obj) {
    return Object.keys(obj);
  }

  objectVals(obj) {
    return Object.values(obj);
  }

  getMonth(num) {
    return this.month[num];
  }

}
