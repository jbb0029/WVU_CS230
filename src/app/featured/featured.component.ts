import { Component, OnInit } from "@angular/core";

import { Card } from "./card.model";
import { mock_featured } from "./mock-featured";
import { FeaturedCardData } from "./featured.service";

@Component({
    selector: "app-featured",
    templateUrl: "featured.component.html"
})
// export class FeaturedComponent implements OnInit{

//     cards:Card[] = [];


//     ngOnInit(): void {
//         for (var card of FeaturedCardData) {
//             this.cards.push(new Card(card));
//         }
//     }
// }
export class FeaturedComponent implements OnInit{
    cardData: Card[] = [];

    constructor(private cardDataService:FeaturedCardData){
    }
    ngOnInit(): void{
        console.log("Registering showUserInfo as a subscriber");
        this.showCardInfo();
    }

    showCardInfo() {
        this.cardDataService.getCardInfo().subscribe((data:Card[]) => {
            console.log(data);
            for (var card of data) {
                   this.cardData.push(card);
             }
            
        })
    }

    
    
}