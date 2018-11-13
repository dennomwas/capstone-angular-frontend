import { Component, OnInit, Input, SimpleChange } from '@angular/core';

// local imports
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-forecast-data',
  templateUrl: './forecast-data.component.html',
  styleUrls: ['./forecast-data.component.css']
})
export class ForecastDataComponent implements OnInit {
  title = 'Weather Details';
  errorMsg: string;
  latitude: number;
  longitude: number;
  @Input() coordinates;

  constructor(private forecastService: ForecastService) {
  }

  ngOnChanges(changedData: SimpleChange) {
    console.log('Forecast', changedData);
    this.latitude = changedData.coordinates.currentValue.latitude;
    this.longitude = changedData.coordinates.currentValue.longitude;

    this.forecastService.getForecastData(this.latitude, this.longitude)
      .subscribe(responseData => this.coordinates = responseData,
        responseError => this.errorMsg = responseError);
  }

  ngOnInit() {

  }
}

