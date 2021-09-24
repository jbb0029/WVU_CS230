import { Component, Input } from "@angular/core";

@Component({
    selector: "featured-card",
    templateUrl: "cards.component.html"
})
export class FeaturedCardComponent {
    @Input()
    title! :string;
    @Input()
    description! :string;
    @Input()
    price! :string;
    @Input()
    imagePath! :string;
}