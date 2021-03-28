import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frais',
  templateUrl: './frais.page.html',
  styleUrls: ['./frais.page.scss'],
})
export class FraisPage implements OnInit {

  frais:any;
  montant:number;
  constructor(private authService: AuthService,public alertController: AlertController, public navCtrl: NavController) { }

  ngOnInit() {
    this.isFrais();
  }

  isFrais(){    
    this.authService.readFrais(this.montant)
    .subscribe(res=>{
      //console.log(res);
      if(this.montant){
        this.frais=res;
        this.presentAlert();
      }
      //console.log(this.montant);
      
    })
  }
  async presentAlert() {
    //const montant=this.montant;
   // const recepteur=this.data.retraitClient.nom+" "+this.data.retraitClient.prenom;
      const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Conversion reussi',
      subHeader: 'Info',
      message: 'Pour une transaction de '+this.montant+' les frais sont: <b>'+this.frais+' fr cfa</b>',
      buttons: ['OK']
    });

    await alert.present();
  }

  submit(){
    this.isFrais();
  }
  backHome(){
    this.navCtrl.navigateForward('menu');
  }

}
