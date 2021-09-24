import { Component, OnInit } from "@angular/core";
import { Card } from "./card.model";
import { mock_featured } from "./mock-featured";

@Component({
    selector: "app-featured",
    templateUrl: "featured.component.html"
})
export class FeaturedComponent implements OnInit{

    cards:Card[] = [];

    ngOnInit(): void {
        for (var card of mock_featured) {
            this.cards.push(new Card(card));
        }
    }
}