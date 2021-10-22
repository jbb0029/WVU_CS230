import { Component } from "@angular/core";
import { UserInfo } from "../header/user-info.model";
import { UserInfoService } from "../header/user-info.service";

@Component({
    selector: 'battlenet-edit-user-info',
    templateUrl: 'edit-user-info.component.html'
})
export class EditUserInfoComponent {
    constructor(private infoService: UserInfoService){
        
    }
    onUpdateUserInfo(data:UserInfo) {
        console.log("You pressed a button");
        this.infoService.modifyUserInfo(data).subscribe(data => {
            console.log("Updated your information")
        });
    }
}