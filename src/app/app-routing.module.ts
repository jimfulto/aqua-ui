import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';
import { WeatherListingComponent } from './components/weather-listing/weather-listing.component';
import { WeatherRegistrationComponent } from './components/weather-registration/weather-registration.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'weatherlisting/view/:id',
    component: WeatherDetailComponent
  },
  {
    path:'weatherlisting',
    component: WeatherListingComponent
  },
  {
    path:'weatherregistration',
    component: WeatherRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
