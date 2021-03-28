import { AuthConstants } from './../config/auth-constants';
import { StorageService } from './../services/storage.service';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { resolve } from 'node:path';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router, private storageService: StorageService){}
  canActivate(): Promise<boolean>{
    return new Promise(resolve=>{
      resolve(true);
    });
    this.storageService.get(AuthConstants.AUTH).then(res=>{
      if(res){
        resolve("true");
      }else{
        this.router.navigate(['/']);
        resolve("false");
      }
    }).catch(error=>{
      resolve("false");
    })
    /*if(!this.auth.hasToken()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;*/

  }
  
}
