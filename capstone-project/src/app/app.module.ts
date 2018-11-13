import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

// local imports
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyA76mUQk71y3A7jOBxr1YBgNsfgbjVyWEM' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
