import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { from } from 'rxjs';

import { SignupComponent } from './signup.component';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let authService: AuthService;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule, HttpModule, FormsModule],
      providers: [AuthService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    authService = TestBed.get(AuthService);

  });

  it('should register a new user', () => {
    const user = '';
    const spy = spyOn(authService, 'register').and.callFake(() => {
      return Observable.from([user]);
    });
    expect(component.signup()).toBeTruthy();
    expect(spy).toHaveBeenCalled();
  });
});
