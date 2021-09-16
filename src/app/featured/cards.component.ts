import { Component, Input } from "@angular/core";

@Component({
    selector: "featured-card",
    templateUrl: "cards.component.html"
})
export class FeaturedCardComponent {
    @Input()
    title! :string;
    description! :string;
    price! :string;
    imagePath! :string;
}