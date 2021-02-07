import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private http: HttpClient) { }

  getSensors() {
    return this.http.get('/server/api/v1/sensors');
  }

  getSensor(id: number) {
    return this.http.get('/server/api/v1/sensors/' + id);
  }

  createSensorRegistration(sensor: any) {
    let body = JSON.stringify(sensor);
    return this.http.post('/server/api/v1/sensors', body, httpOptions)
  }
}
