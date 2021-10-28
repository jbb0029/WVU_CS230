import { Component } from "@angular/core";
import { UserInfo } from "../header/user-info.model";
import { LoginInfoService } from "../body/login.service";
import { LoginInfo } from "./login.model";

@Component({
    selector: 'battlenet-edit-user-info',
    templateUrl: 'edit-user-info.component.html'
})
export class LoginInfoComponent {
    constructor(private infoService: LoginInfoService){
        
    }
    onUpdateUserInfo(data:LoginInfo) {
        console.log("You pressed a button");
        this.infoService.modifyUserInfo(data).subscribe(data => {
            console.log("Updated your information")
        });
    }
}