import { AuthService } from './../services/auth.service';
import { LoginPage } from './../login/login.page';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../config/auth-constants';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
   constructor(public navCtrl: NavController, private authService: AuthService, private storageService: StorageService) {}
   login(){
     this.authService.isLogOut();
     //this.storageService.removeItem(AuthConstants.AUTH);
     this.navCtrl.navigateForward("login");
   }
}
