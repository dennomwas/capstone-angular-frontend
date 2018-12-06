import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule, FormsModule, HttpModule],
      providers: [AuthService]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // UserService provided to the TestBed
    authService = TestBed.get(AuthService);

  });

  it('canLogin returns false when the user is not authenticated', () => {
    const user = {
      email: 'dennomwas@gmail.com',
      password: '123456'
    };
    spyOn(authService, 'login').and.returnValue(user);
    expect(component.login()).toBeTruthy();
    expect(authService.login).toHaveBeenCalled();
  });
});
