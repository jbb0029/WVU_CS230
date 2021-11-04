import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { LoginInfo } from "./login.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    
    constructor(private db:AngularFireDatabase){
    
    }

    ngOnInit(): void {
        this.getNewLogin();
    }

    public getNewLogin() {
        this.db.list<LoginInfo>('login-info').valueChanges();
    }

    public postNewLogin(loginInfo:LoginInfo) {
        this.db.list<LoginInfo>('login-info').push(loginInfo);
    }

 //   public showData() {
 //       this.items.subscribe((data: LoginInfo [] ) => {
  //      console.log("data received");
 //       for (let item of data) {
  //          console.log(item);
        }
  //      })   
  //  }
//}