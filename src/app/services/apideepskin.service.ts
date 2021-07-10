import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {Observable} from 'rxjs';
import {Token} from '../../model/token';
import {deepskin} from '../../confidential/deepskinapi';
import {Readings_raw} from '../../model/readings_raw';

@Injectable({
  providedIn: 'root'
})
export class ApideepskinService {

  constructor(private http: HttpClient) { }

  getToken(): Observable<Token>{
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
    });
    const options = {headers, withCredentials: false};

    return this.http.post<Token>(deepskin.api + deepskin.authPath, {
      email: deepskin.email,
      password: deepskin.password
    }, options);
  }

  getPrediction(data: any): Observable<Readings_raw>{
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      authorization: deepskin.token
    });
    const options = {headers, withCredentials: false};
    return this.http.post<Readings_raw>(deepskin.api + deepskin.analysisPath, data, options);

  }
}
