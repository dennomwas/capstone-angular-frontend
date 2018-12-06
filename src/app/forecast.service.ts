import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

// local imports
import { contentHeaders } from './utils/headers';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private base_url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/555b36972353e85db3d982385a01c4a2/';

  constructor(private http: Http) { }

  getForecastData(lat: number, lng: number): any {
    const forecast_url = this.base_url + lat + ',' + lng;

    return this.http.get(forecast_url, { headers: contentHeaders })
      .pipe(
        map((response: Response) => response.json()),
        retry(3),
        catchError(this.errorHandler)
      );
  }


  private errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Something bad happened; please try again later.');
  }
}
