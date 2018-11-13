import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather Forecast App';
  coordinates = {
    latitude: -1.221223,
    longitude: 36.885043
  };

}