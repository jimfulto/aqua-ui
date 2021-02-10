import { Component, OnInit } from '@angular/core';
import { SensorService } from 'src/app/services/sensor.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-registration',
  templateUrl: './weather-registration.component.html',
  styleUrls: ['./weather-registration.component.css']
})
export class WeatherRegistrationComponent implements OnInit {

  sensorform!: FormGroup;
  validMessage: string = "";

  constructor(private sensorService: SensorService, private router: Router) { }

  ngOnInit(): void {
    this.sensorform = new FormGroup({
      timeStamp: new FormControl('', Validators.required),
      flow: new FormControl('', Validators.required),
      pressure: new FormControl('', Validators.required)
    });
  }

  submitRegistration() {

    if(this.sensorform.valid) {
      this.sensorService.createSensorRegistration(this.sensorform.value).subscribe(
        data => {
          this.sensorform.reset();
        },
        error => {
          return Observable.throw(error);
        }
      );
      this.router.navigate(['weatherlisting']);
    } else {
      this.validMessage = "Please fill out the form before submitting";
    }
  }

}
