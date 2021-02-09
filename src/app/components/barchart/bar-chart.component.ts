import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import {SensorService} from '../../services/sensor.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public sensors: any;
  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Flow' },
    { data: [], label: 'Pressure' }
  ];
  constructor(private sensorService: SensorService) { }

  ngOnInit(): void {
    this.getSensors();
  }

  getSensors(): void{
    this.sensorService.getSensors().subscribe(
      data => {
        this.sensors = data;
        this.sensors.forEach((sensor: any) => {
          // @ts-ignore
          this.barChartData[0].data.push(sensor.flow);
          // @ts-ignore
          this.barChartData[1].data.push(sensor.pressure);
          this.barChartLabels.push(sensor.timeStamp);
        });
      },
      err => console.log(err),
      () => console.log('sensors loaded')
    );

    console.log(this.barChartData);
  }
}
