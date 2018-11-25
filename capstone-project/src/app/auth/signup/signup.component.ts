import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: '../login/login.component.html',
  styleUrls: ['../login/login.component.css']
})
export class SignupComponent implements OnInit {
  signupPage = true;

  constructor() { }

  ngOnInit() {
  }

}
