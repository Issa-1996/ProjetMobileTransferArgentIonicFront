import { MenuPage } from './../menu/menu.page';
import { Transaction } from './../model/transaction.model';
import { AuthService } from './../services/auth.service';
import { NavController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.page.html',
  styleUrls: ['./depot.page.scss'],
})
export class DepotPage implements OnInit {

  data=  {
    montant: '',
    depotClient:{
      nom: '',
      prenom:'',
      cni: '',
      telephone:''
    },
    retraitClient:{
      nom: '',
      prenom:'',
      telephone:''
  }
  };
  error=  {
    montant: '',
    depotClient:{
      nom: '',
      prenom:'',
      cni: '',
      telephone:''
    },
    retraitClient:{
      nom: '',
      prenom:'',
      telephone:''
  }
  };

  status='true';
  infoDepotCode:any;
  infoDepotDate:any;
  frais:any;
  montant:any;
  constructor(private authService: AuthService,  public navCtrl: NavController,public alertController: AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const montant=this.data.montant;
    const recepteur=this.data.retraitClient.nom+" "+this.data.retraitClient.prenom;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Transfer reussi',
      subHeader: 'Info',
      message: 'vous avez envoyer '+montant+' fr cfa à '+recepteur+' le '+this.infoDepotDate+' <br/><p>Code de transaction <br/>'+this.infoDepotCode+'</p>',
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentAlertConfirm() {
   const emetteur=this.data.depotClient.nom+" "+this.data.depotClient.prenom;
   const telephoneEmetteur=this.data.depotClient.telephone;
   const cniEmetteur=this.data.depotClient.cni;
   const montant=this.data.montant;
   const recepteur=this.data.retraitClient.nom+" "+this.data.retraitClient.prenom;
   const telephoneRecepteur=this.data.retraitClient.telephone;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation!',
      message: 'EMETTEUR <br/><strong>'+emetteur+'</strong><br/>Telephone <br/><strong>'+telephoneEmetteur+'</strong><br/>CNI <br/><strong>'+cniEmetteur+'</strong><br/>Montant a envoyer <br/><strong>'+montant+'</strong><br/>RECEPTEUR <br/><strong>'+recepteur+'</strong><br/>Telephone<br/><strong>'+telephoneRecepteur+'</strong>',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmer',
          handler: () => {
            //console.log('Confirm Okay');
            this.authService.depot(this.data)
            .subscribe( res => {
              if(res){
                //console.log('verifie',res);
                this.infoDepotDate=res["dateDepot"];
                this.infoDepotCode=res["codeTransaction"]
                this.presentAlert();
                this.navCtrl.navigateForward('menu');
              }
            });      
          }
        }
      ]
    });

    await alert.present();
  }
  onSubmit(comp) {    

      if((this.data.depotClient.cni.length<=0)){
        this.error.depotClient.cni="cni est obligatoire";
      }else{
        this.error.depotClient.cni="";
        if((this.data.depotClient.nom.length<=0)){
          //console.log(this.data.depotClient.nom);
          
          this.error.depotClient.nom="nom de l'emetteur obligatoire";
        }else{
          this.error.depotClient.nom="";
          if((this.data.depotClient.prenom.length<=0)){
            this.error.depotClient.prenom="prenom est obligatoire";
          }else{
            this.error.depotClient.prenom="";
            if((this.data.depotClient.telephone.length<=0)){
              this.error.depotClient.telephone="telephone obligatoire";
            }else{
              this.error.depotClient.telephone="";
              if((this.data.montant.length<=0)){
                this.error.montant="montant obligatoire";
                //console.log("erreur");
              }else{
                this.error.montant="";
                if((this.data.retraitClient.nom.length<=0)){
                  this.error.retraitClient.nom="nom obligatoire";
                }else{
                  this.error.retraitClient.nom="";
                  if(this.data.retraitClient.prenom.length<=0){
                    this.error.retraitClient.prenom="prenom obligatoire";
                  }else{
                    this.error.retraitClient.prenom='';
                    if(this.data.retraitClient.telephone.length<=0){
                      this.error.retraitClient.telephone="telephone obligatoire";
                    }else{
                      this.error.retraitClient.telephone='';
                      this.presentAlertConfirm();
                    }
                  }
                }            
              }          
            }        
          }      
        }    
      }  
    
    
    
    
    

    /*if((this.data.montant.length>0)&& (this.data.depotClient.cni.length>0)&&(this.data.depotClient.nom.length>0)&& (this.data.depotClient.prenom.length>0)&&(this.data.depotClient.telephone.length>0)&&(this.data.retraitClient.nom.length>0)){
      console.log("ok");
      
      this.presentAlertConfirm();
    }  */
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
  mesFrais(){
    this.authService.readFrais(this.data.montant)
    .subscribe(res=>{
      //console.log(res);
      this.frais=res;
      this.montant=this.data.montant + this.frais;
      
      
    })
  }
  
}
