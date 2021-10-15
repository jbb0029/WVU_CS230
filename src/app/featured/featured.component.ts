import { Component, OnInit } from "@angular/core";
import { UserInfoService } from "../body/user-info.service";
import { Card } from "./card.model";
import { mock_featured } from "./mock-featured";

@Component({
    selector: "app-featured",
    templateUrl: "featured.component.html"
})
export class FeaturedComponent implements OnInit{

    cards:Card[] = [];

    constructor(private userinfo: UserInfoService){
        
    }

    ngOnInit(): void {
        for (var card of mock_featured) {
            this.cards.push(new Card(card));
        }
    }
}