import { User } from './../model/user.model';
import { AuthConstants } from './../config/auth-constants';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  UsersConnects: User[]=[];
  UserAvatar:any;
  date:any;
  profil:any;
  status="false";
  constructor(public navCtrl: NavController, private storageService:StorageService, private menu: MenuController, private authService: AuthService, public alertController: AlertController, private router:Router) { }

  ngOnInit() {
    this.userCurrent();
  }

  userCurrent(){
    this.authService.currentUser().subscribe(
      res=>{
      //console.log(res);
      if(res){
        //console.log(res);
        this.profil=res['profil']['libelle'];
        //console.log(this.profil);
        
        this.date=res['agence']['compte']['dateDernierAccess'];
        this.UserAvatar=res['avatar'];
        this.UsersConnects=res['agence']['compte'];
 
      }
    },
    error=>{
      console.log(error);
      
    })
  }


  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Deconnexion!',
      message: 'Voullez-vous vraiment <strong>Deconnecter?</strong>!!!',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
           ///console.log(this.storageService.get(AuthConstants.AUTH, this.authService.login));
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
            //console.log('Confirm Okay');
            //this.storageService.removeItem(AuthConstants.AUTH);
            this.authService.isLogOut();
            //this.storageService.removeItem(AuthConstants.AUTH);
            this.router.navigate(['/']);
          }
        }
      ]
    });
    await alert.present();
  }
  depot(){
    this.navCtrl.navigateForward('depot');
  }
  retrait(){
    this.navCtrl.navigateForward('retrait');
  }

  mesTransactions(){
    this.navCtrl.navigateForward('mes-transactions');
  }
  backHome(){
    this.navCtrl.navigateForward('home');
    this.authService.isLogOut();
    //this.storageService.removeItem(AuthConstants.AUTH);
  }
  cacher(){
    this.status="true";
  }
  afficher(){
    this.status="false";
  }
  frais(){
    this.navCtrl.navigateForward("frais");
  }
  transactions(){
    this.navCtrl.navigateForward("transactions");
  }
  commission(){
    this.navCtrl.navigateForward("commission");
  }
}
