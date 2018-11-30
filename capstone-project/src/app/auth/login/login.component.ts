import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

// local imports
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  loginPage = true;
  email: string;
  password: string;

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() { }

  login() {
    this.authservice.login(this.email, this.password)
      .subscribe(
        response => {
          if (response.token) {
            localStorage.setItem('token', response.token);
            this.router.navigate(['dashboard']);
          } else {
            this.router.navigate(['registration']);
          }
        },
        error => {
          console.error(error);
        }
      );
  }

  logout() {
    localStorage.removeItem('token');
    // this.router.navigate(['/registration/login']);
  }

}
