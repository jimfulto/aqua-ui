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
  currentDate = new Date();
  date: string = "";
  buttonLoad: boolean = false;

  constructor(private sensorService: SensorService, private router: Router) { }

  ngOnInit(): void {
    this.sensorform = new FormGroup({
      timeStamp: new FormControl('', Validators.required),
      flow: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      pressure: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    });
  }

  submitRegistration() {

    if(this.sensorform.valid) {
      this.sensorService.createSensorRegistration(this.sensorform.value).subscribe(
        data => {
          //this.sensorform.reset(); keep data and route
        },
        error => {
          return Observable.throw(error);
        }
      );
      this.buttonLoad = true;
      setTimeout(
        () => {
          this.router.navigate(['weatherlisting']);
        }, 2000
      );
    } else {
      this.validMessage = "Please fill out the form before submitting";
    }
  }

}
