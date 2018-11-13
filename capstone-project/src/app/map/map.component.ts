import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  mapTitle = 'The Location Map';

  @Input() coordinates;
  latitude: number;
  longitude: number;


  constructor() {
  }

  ngOnChanges(changedData: SimpleChange) {
    console.log('ngOnChanges: coordinates values', this.coordinates);
    this.longitude = changedData.coordinates.currentValue.longitude;
    this.latitude = changedData.coordinates.currentValue.latitude;
  }

  ngOnInit() {

  }

}