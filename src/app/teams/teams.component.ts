import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Team } from '../team';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  data: any = {};

  constructor(private dataService: DataService, private router: Router, private http: Http) { }

  ngOnInit() {
    this.dataService.getTeams().subscribe( (league) => {
      console.log('component', league);
      this.data = league;
    });

  }

}
