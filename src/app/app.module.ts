import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SensorService } from './services/sensor.service';
import { WeatherListingComponent } from './components/weather-listing/weather-listing.component';
import { WeatherRegistrationComponent } from './components/weather-registration/weather-registration.component';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';
import {BarChartComponent} from './components/barchart/bar-chart.component';
import {ChartsModule} from 'ng2-charts';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherListingComponent,
    WeatherRegistrationComponent,
    WeatherDetailComponent,
    BarChartComponent,
    LoginComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [SensorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
