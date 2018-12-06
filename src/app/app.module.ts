import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

// local imports
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { CoordinatesformComponent } from './coordinatesform/coordinatesform.component';
import { ForecastDataComponent } from './forecast-data/forecast-data.component';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CoordinatesformComponent,
    ForecastDataComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SignupComponent,
    FooterComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyA76mUQk71y3A7jOBxr1YBgNsfgbjVyWEM' }),
    AppRoutingModule
  ],
  exports: [
    FormsModule,
    RegisterComponent,
    LoginComponent,
    CommonModule
    ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
