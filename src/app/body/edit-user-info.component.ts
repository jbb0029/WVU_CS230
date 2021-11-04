import { Component } from "@angular/core";
import { LoginInfoService } from "../body/login.service";
import { LoginInfo } from "./login.model";
import { DatabaseService } from "./database.service";

@Component({
    selector: 'battlenet-edit-user-info',
    templateUrl: 'edit-user-info.component.html'
})
export class LoginInfoComponent {
    constructor(private infoService: LoginInfoService, private dbService:DatabaseService){
        
    }


    editLoginInfo(loginInfo:LoginInfo) {
        this.dbService.postNewLogin(loginInfo);
    }

    onUpdateUserInfo(data:LoginInfo) {
        console.log("You pressed a button");
        this.infoService.modifyUserInfo(data).subscribe(data => {
            console.log("Updated your information")
        });
    }
}