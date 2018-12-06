import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// local imports
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.css']
})
export class SignupComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  errorMessage: string;

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signup() {
    this.authservice.register(this.firstName, this.lastName, this.email, this.password)
      .subscribe(
        response => {
          if (response.token) {
            localStorage.setItem('token', response.token);
            this.router.navigate(['dashboard']);
          } else {
            this.router.navigate(['/registration/signup']);
          }
        },
        error => {
          this.errorMessage = <any>error;
        }
      );
  }
}
