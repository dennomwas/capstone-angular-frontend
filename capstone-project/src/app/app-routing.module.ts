import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// local imports
import { MapComponent } from './map/map.component';
import { CoordinatesformComponent } from './coordinatesform/coordinatesform.component';
import { ForecastDataComponent } from './forecast-data/forecast-data.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { SignupComponent } from './auth/signup/signup.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'registration', component: RegisterComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: '', redirectTo: '/registration/login', pathMatch: 'full' },
    ]
  },
  { path: 'weathermap', component: MapComponent },
  { path: '', redirectTo: '/registration/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/registration/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

// export const routingComponents = [LoginComponent];
