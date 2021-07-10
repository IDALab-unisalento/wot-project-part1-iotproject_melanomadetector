import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  post(serviceName: string, data: any, path: string){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:8100/'
    });
    const options = { header: headers, withCredentials: false};

    const url = environment.apiUrl;
    console.log(url + path);
    return this.http.post(url + path, data, options);
  }
}
