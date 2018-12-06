import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';

// local imports
import { contentHeaders } from '../utils/headers';
import { Ilogin, Iregister } from '../utils/auth-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  message: string;
  private authUrl = 'https://cors-anywhere.herokuapp.com/https://peaceful-beach-77632.herokuapp.com/';

  constructor(private http: Http, private router: Router) { }

  login(email, password): Observable<Ilogin> {
    const loginData = JSON.stringify({ email, password });
    const authLoginUrl = this.authUrl + '/login';

    return this.http.post(authLoginUrl, loginData, { headers: contentHeaders })
      .pipe(
        map((response: Response) => <Ilogin>response.json()),
        retry(3),
        catchError(this.errorHandler)
      );
  }


  register(firstName, lastName, email, password ): Observable<Iregister> {
    const registerData = JSON.stringify({ firstName, lastName, email, password });
    const registerUrl = this.authUrl + '/register';

    return this.http.post(registerUrl, registerData, { headers: contentHeaders })
      .pipe(
        map((response: Response) => <Iregister>response.json()),
        retry(3),
        catchError(this.errorHandler)
      );
  }

  private errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Something bad happened; please try again later.');
  }

}

