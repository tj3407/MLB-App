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
    )
  }

}
