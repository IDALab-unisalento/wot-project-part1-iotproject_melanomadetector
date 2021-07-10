import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadingsService {

  readingsSaveEndpoint = 'http://localhost:8080/readings/save';
  constructor(private http: HttpClient) { }

  saveReading(reading: any): Observable<any>{
    console.log(reading);
   return  this.http.post<any>(this.readingsSaveEndpoint, reading);
  }
}
