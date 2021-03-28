import { AuthConstants } from './../config/auth-constants';
import { StorageService } from './../services/storage.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    public email='';
    public password='';
    public emailError='';
    public passwordError='';
    public token:  any;
    public messageError="";

  constructor(private router: Router, private authService: AuthService, private storageService: StorageService) { }

  ngOnInit() {
  }


  validateInputs(){
    let username=this.email.trim();
    let password=this.password.trim();

    return ((this.email) && (this.password) && (username.length > 0) && (password.length>0));
  }
  loginAction(){
    if(this.email.length<=0){
      this.emailError="Email obligatoire";
    }else {
      this.emailError="";
      if(this.password.length<=0){
        this.passwordError="Mot de passe obligatoire";
      }else{
        this.passwordError="";
        this.authService.isLogin(this.email, this.password).
        subscribe(
          res=>{
            
             this.storageService.store(AuthConstants.AUTH, res);
             //console.log(this.storageService.get(AuthConstants.AUTH, res));
              //console.log(res);
              this.token=res;
              this.token=this.token.token;
              localStorage.setItem('token', this.token);
              this.email="";
              this.password="";
              this.router.navigate(['menu']);  
          },
          error=>{
            //console.log("ndank ndank");
            this.messageError="Email ou mot de pass in correcte";
            
          }
        );
        
      }
    }
  }
}
