import { User } from './../model/user.model';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { NavController, IonInfiniteScroll } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  depots:any;
  retraits:any;
  totalRetrait:any=0;
  totalDepot:any=0;
  Total:any;
  prenom:any;
  nom:any;

  constructor( public navCtrl: NavController, private authService: AuthService, private router:Router) { }

  ngOnInit() {
    this.userCurrent();
  }

  backHome(){
    this.navCtrl.navigateForward('menu');
  }
  userCurrent(){
    this.authService.currentUser().subscribe(
      res=>{
        //console.log(res);
      
        this.depots=res["agence"]["compte"]["transactionDepot"];
        this.retraits=res["agence"]["compte"]["transactionRetrait"];
        //console.log(this.depots);  
        this.prenom=res["prenom"];
        this.nom=res["nom"]; 
        console.log(this.prenom);
        

        this.depots.forEach(element => {
          //console.log(element["montant"]);
          this.totalDepot=Number(this.totalDepot+parseInt(element["montant"]));
        });  

        this.retraits.forEach(element => {
          //console.log(element["montant"]);
          this.totalRetrait=Number(this.totalRetrait+parseInt(element["montant"]));
        });  

        this.Total=this.totalDepot+this.totalRetrait;

        //console.log(this.totalDepot);
    },
    error=>{
      console.log(error);
    })
  }
  loadData(event) {
    setTimeout(() => {
      //console.log('Done');
      event.target.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if ((this.retraits.length >= 100) || (this.depots.length >= 100)) {
        event.target.disabled = true;
      }
    }, 5000);
  }


}
