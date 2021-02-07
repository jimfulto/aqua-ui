import { Component, OnInit } from '@angular/core';
import { SensorService } from 'src/app/services/sensor.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-registration',
  templateUrl: './weather-registration.component.html',
  styleUrls: ['./weather-registration.component.css']
})
export class WeatherRegistrationComponent implements OnInit {

  sensorform!: FormGroup;
  validMessage: string = "";

  constructor(private sensorService: SensorService) { }

  ngOnInit(): void {
    this.sensorform = new FormGroup({
      timeStamp: new FormControl('', Validators.required),
      flow: new FormControl('', Validators.required),
      pressure: new FormControl('', Validators.required)
    });
  }

  submitRegistration() {

    if(this.sensorform.valid) {
      this.validMessage = "Your report has been submitted!";
      this.sensorService.createSensorRegistration(this.sensorform.value).subscribe(
        data => {
          this.sensorform.reset();
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Please fill out the form before submitting";
    }
  }

}
