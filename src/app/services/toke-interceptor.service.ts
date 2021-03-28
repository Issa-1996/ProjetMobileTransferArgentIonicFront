import { AuthConstants } from './../config/auth-constants';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokeInterceptorService implements HttpInterceptor{

  constructor(private storageService:StorageService) { }
  intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
    if(localStorage.getItem('token')){
      const token=localStorage.getItem('token');
      const toke=this.storageService. get(AuthConstants.AUTH);
      //console.log(token);
      
      const newRequest=request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(newRequest);
    }
    return next.handle(request)
  }
}
