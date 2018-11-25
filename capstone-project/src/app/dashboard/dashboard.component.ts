import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Weather Forecast App';
  coordinates = {
    latitude: -1.221223,
    longitude: 36.885043
  };

  constructor() { }

  ngOnInit() {
  }

}
