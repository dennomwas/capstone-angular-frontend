import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// local imports
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'Register with us';

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

}
