import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { User } from './../model/user.model';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mes-transactions',
  templateUrl: './mes-transactions.page.html',
  styleUrls: ['./mes-transactions.page.scss'],
})
export class MesTransactionsPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  UsersConnects: User[]=[];
  UserAvatar:any;
  depots:any;
  retraits:any;
  totalRetrait:any=0;
  totalDepot:any=0;
  Total:any;

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
        this.retraits=res["retraitTransaction"];
        this.depots=res["depotTransaction"];
        //console.log(this.depots);    
        this.depots.forEach(element => {
          this.totalDepot=Number(this.totalDepot+parseInt(element["montant"]));
        });  
        this.retraits.forEach(element => {
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
