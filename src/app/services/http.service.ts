import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  post(serviceName: String, data: any){
    const headers=new HttpHeaders();
    const options ={ headers:headers};
    const url=environment.apiUrl +serviceName;
    return this.http.post(url, JSON.stringify(data), options);
  }
  
}
