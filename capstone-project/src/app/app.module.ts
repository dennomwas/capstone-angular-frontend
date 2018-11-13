import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

// local imports
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { CoordinatesformComponent } from './coordinatesform/coordinatesform.component';
import { ForecastDataComponent } from './forecast-data/forecast-data.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CoordinatesformComponent,
    ForecastDataComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyA76mUQk71y3A7jOBxr1YBgNsfgbjVyWEM' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
