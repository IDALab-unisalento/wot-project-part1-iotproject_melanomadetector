import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {mdAPI} from '../../confidential/awsAPI';
import {Readings} from '../../model/readings';

@Injectable({
  providedIn: 'root'
})
export class ReadingsService {

  readingsSaveEndpoint = mdAPI.api + 'readings/save';
  readingsGetByUserIDEndpoint = mdAPI.api + 'readings/user/';
  constructor(private http: HttpClient) { }

  saveReading(reading: any): Observable<any>{
    return  this.http.post<any>(this.readingsSaveEndpoint, reading);
  }
  getAllReadingsUser(id: number): Observable<Readings[]>{
    return this.http.get<Readings[]>(this.readingsGetByUserIDEndpoint + id);
  }
}
