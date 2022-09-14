import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Ciudad } from '../interfaces/Ciudad';
import { TEMPERATURAS } from './mock-temperaturas';


@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor(private http: HttpClient) { }

  /*
  getWeather(date:Date, ciudad:Ciudad) {
    return this.http.get<any>(`https://api.open-meteo.com/v1/forecast?latitude=${ciudad.lat}&longitude=${ciudad.long}&hourly=temperature_2m&start_date=${fecha}&end_date=${fecha}`);
  }
  */

  getWeather(date:Date, ciudad:Ciudad): Observable<string | undefined>{
    return of(TEMPERATURAS.get(ciudad.nombre));
  }

}
