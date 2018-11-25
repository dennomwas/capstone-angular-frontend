import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnChanges {
  mapTitle = 'The Location Map';

  @Input() coordinates;
  latitude: number;
  longitude: number;


  constructor() {
  }

  ngOnChanges(changedData: SimpleChanges): void {
    this.longitude = changedData.coordinates.currentValue.longitude;
    this.latitude = changedData.coordinates.currentValue.latitude;
  }
}
