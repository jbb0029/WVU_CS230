import { Component, Injectable, Injector, OnInit } from "@angular/core";
import { LoginInfo } from "../body/login.model";

import { UserInfoService } from "./user-info.service";


@Component({
    selector: "battlenet-user-info",
    templateUrl: "user-info.component.html"
})
export class UserInfoComponent implements OnInit{
    loginInfo: LoginInfo | undefined;

    constructor(private userInfoService:UserInfoService){
    }
    ngOnInit(): void{
        console.log("Registering showUserInfo as a subscriber");
        this.showUserInfo();
    }

    showUserInfo() {
        this.userInfoService.getUserInfo().subscribe((data:LoginInfo) => {
            console.log(data);
            this.loginInfo = data;
        })
    }
}