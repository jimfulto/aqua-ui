import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SensorService } from 'src/app/services/sensor.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {

  constructor(private sensorService: SensorService, private route: ActivatedRoute) { }

  public sensorReg: any;

  ngOnInit(): void {
    this.getSensorReg(this.route.snapshot.params.id);
  }

  getSensorReg(id: number) {
    this.sensorService.getSensor(id).subscribe(
      data => {
        this.sensorReg = data;
      },
      err => console.log(err),
      () => console.log('sensors loaded')
    );
  }

}
