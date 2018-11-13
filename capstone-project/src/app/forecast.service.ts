import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map, catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private base_url = 'https://api.darksky.net/forecast/555b36972353e85db3d982385a01c4a2/';
  constructor(private http: Http) { }

  httpHeaders = {
    headers: new Headers({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    })
  };

  getForecastData(lat: number, lng: number): any {

    const get_forecast_url = this.base_url + lat + ',' + lng;
    console.log(get_forecast_url);
    return this.http.get(get_forecast_url, this.httpHeaders)
      .pipe(map((response: Response) => response.json()),
        retry(3),
        catchError(this.errorHandler)
      );
  }


  private errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Check your Server');
  }

}
