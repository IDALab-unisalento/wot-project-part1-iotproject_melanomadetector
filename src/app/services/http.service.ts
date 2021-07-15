import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {mdAPI} from '../../confidential/awsAPI';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  post(serviceName: string, data: any, path: string){
    let reqOpts = {
      headers: new HttpHeaders(),
      params: new HttpParams()
    };

    const url = mdAPI.api;
    return this.http.post(url + path, data);
  }
}
