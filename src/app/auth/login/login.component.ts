import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

// local imports
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  errorMessage: string;

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() { }

  login() {
    return this.authservice.login(this.email, this.password)
      .subscribe(
        response => {
          if (response.token) {
            localStorage.setItem('token', response.token);
            this.router.navigate(['dashboard']);
          } else {
            this.router.navigate(['registration/login']);
          }
        },
        error => {
          this.errorMessage = <any>error;
        }
      );
  }

}
