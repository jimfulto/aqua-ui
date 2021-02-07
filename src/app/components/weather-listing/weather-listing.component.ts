import { Component, OnInit } from '@angular/core';
import { SensorService } from 'src/app/services/sensor.service';

@Component({
  selector: 'app-weather-listing',
  templateUrl: './weather-listing.component.html',
  styleUrls: ['./weather-listing.component.css']
})
export class WeatherListingComponent implements OnInit {

  public sensors: any;

  constructor(private sensorService: SensorService) { }

  ngOnInit(): void {
    this.getSensors();
  }

  getSensors() {
    this.sensorService.getSensors().subscribe(
      data => { this.sensors = data},
      err => console.log(err),
      () => console.log('sensors loaded')
    );
  }

}
