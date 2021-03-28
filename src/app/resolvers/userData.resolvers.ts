import { Injectable } from '@angular/core';
import { AuthService } from './../services/auth.service';

@Injectable({
    providedIn: 'root'
  })

export class UserdataResolvers{

    constructor(public auth: AuthService){}

    resolve(){
        console.log("aller la route home");
        
        return this.auth.getUserData();
    }
}