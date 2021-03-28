import { Transaction } from './../model/transaction.model';
import { User } from './../model/user.model';
import { AuthConstants } from './../config/auth-constants';
import { StorageService } from './storage.service';
import { HttpService } from './http.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userDataS=new BehaviorSubject<any>('')
  constructor(private httpclient: HttpClient,private httpService: HttpService, private storageService: StorageService, private router: Router) { }

  headers=new HttpHeaders({Accept:'*/*'})

  httpOptions={
    headers: new HttpHeaders({
      Authorization: 'Bearer'+this.getUserData
    })
  }
  /**
   * Stock le token si l'utilisateur est connecter
   * @returns {boolean}
   */
     public hasToken() : boolean {
      return !!localStorage.getItem('token');
    }
    /**
   * Connexion de l'utilisateur et prend en parametre, le login et le password
   * cette methode est appeler dans auth.component.ts
   * @param email 
   * @param password 
   */
     isLogin(email: string, password: string){
      const body='{"email":"'+ email +'","password":"'+ password+ '"}';        
      const header=new HttpHeaders({'Content-Type':'application/json'});  
      return this.httpclient.post("http://127.0.0.1:8000/api/login",body,{headers:header});
    }
  isLogOut(){
    localStorage.removeItem('token');  
  }
  getUserData(){
    this.storageService.get(AuthConstants.AUTH).then(res=>{
      console.log(res);
      return res;
      //this.userDataS.next(res);
    })
  }
  currentUser(): Observable<User[]>{
    
    return this.httpclient.get<User[]>('http://127.0.0.1:8000/api/admin/currentUser', this.httpOptions);
  }
  depot(depot: any): Observable<Transaction> {
    return this.httpclient.post<Transaction>('http://127.0.0.1:8000/api/admin/transaction/depot', depot, this.httpOptions);
  }
  readFrais(montant: any): Observable<any> {
    return this.httpclient.get<any>('http://127.0.0.1:8000/api/admin/frais/'+montant, {headers: {'Content-Type': 'application/json'}});
  }
  retrait(userFormData: any): Observable<Transaction> {
    return this.httpclient.post<Transaction>('http://127.0.0.1:8000/api/admin/transaction/retrait',  userFormData, this.httpOptions);
  }
  retraitCode(code: any): Observable<any> {
    return this.httpclient.get<any>('http://127.0.0.1:8000/api/admin/transaction/'+code, this.httpOptions);
  }
}
