import { Transaction } from './../model/transaction.model';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.page.html',
  styleUrls: ['./retrait.page.scss'],
})
export class RetraitPage implements OnInit {

  status='true';
  infoRetrait:any;
  cniEmetteur:any;
  nomEmetteur:any;
  telephoneEmetteur:any;
  nomBeneficiaire:any;
  etat="false";
  telephone:any;
  montant:any;
  date:any;
  data={
    codeTransaction:'',
    retraitClient:{
      cni:'',
    }
  }

  constructor(private authService: AuthService,  public navCtrl: NavController,public alertController: AlertController) { }

  ngOnInit() {
  }

  backHome(){
    this.navCtrl.navigateForward('menu');
  }
  emetteur(){
    this.status="true";
  }
  recepteur(){
    this.status="false";
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Information de Retrait',
      subHeader: 'Confirmation',
      message: 'Le retrait a éte fait avec sucess.',
      buttons: ['OK']
    });

    await alert.present();
  }
  async errorCode() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Information de Retrait',
      subHeader: 'Erreur',
      message: 'Ce code est non valide.',
      buttons: ['OK']
    });

    await alert.present();
  }


  onSubmit(){
    this.authService.retrait(this.data)
    .subscribe( data => {
      //console.log(data);
      this.presentAlert();
      this.navCtrl.navigateForward('menu');
      
      //this.router.navigate(['/home/listerUsers']);
    });    
   }
   codeRetrait(code){
     //console.log(code);
     this.authService.retraitCode(code)
     .subscribe(res=>{
       if(res){
         console.log(res);
         
         if(res["compteRetrait"]){
           this.errorCode();
           this.navCtrl.navigateForward("menu");
           
         }else{
           this.etat="true";
           this.nomBeneficiaire=res["retraitClient"]["nom"]+" "+res["retraitClient"]["prenom"];
           this.montant=res["montant"];
           this.telephone=res["retraitClient"]["telephone"];
           this.date=res["dateDepot"];
           this.cniEmetteur=res["depotClient"]["cni"];
           this.nomEmetteur=res["depotClient"]["nom"]+" "+res["depotClient"]["prenom"];
           this.telephoneEmetteur=res["depotClient"]["telephone"];           
         }
       }else{
         //console.log("khamouma liiiiiiiiiiiiiiiiiiiiiiiiiii");
         this.errorCode();
         this.navCtrl.navigateForward("menu");
       }
     })
     
   }
}
