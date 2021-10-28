import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginInfo } from "./login.model";

@Injectable({providedIn: 'root'})
export class LoginInfoService {
    private baseUrl:string = 'https://battlenet-app-default-rtdb.firebaseio.com/';
    private myInfoEndpoints:string = 'login-info.json';
    constructor(private http: HttpClient){
        
    }
    getUserInfo() {
        return this.http.get<LoginInfo>(this.baseUrl + this.myInfoEndpoints);
    }

    modifyUserInfo(data:LoginInfo){
        
        return this.http.put(this.baseUrl + this.myInfoEndpoints, data);
        //put replaces something in the database, post adds a new thing
    }
}