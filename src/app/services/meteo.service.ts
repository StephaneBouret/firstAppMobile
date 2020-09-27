import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  cleApi = '32ff4f0856defcfd60eff85a850f9076';


  constructor(public http: HttpClient) { }

  getMeteo(data: any) {
    return this.http.get(`${this.apiUrl}?q=${data.ville}&appId=${this.cleApi}&units=metric`);
  }
}
