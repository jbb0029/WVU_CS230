import { Component } from "@angular/core";
import { Card } from "./card.model";
import { mock_featured } from "./mock-featured";

@Component({
    selector: "app-featured",
    templateUrl: "featured.component.html"
})
export class FeaturedComponent{
    cards:Card[] = [];

    constructor() {
        for (var card of mock_featured) {
            this.cards.push(new Card(card));
        }
    }
}