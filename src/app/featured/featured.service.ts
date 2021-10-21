import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Card } from "./card.model";


@Injectable({providedIn: 'root'})
export class FeaturedCardData {
    private baseUrl:string = 'https://battlenet-app-default-rtdb.firebaseio.com/';
    private featuredCardsDataEndpoints:string = 'featured-cards.json';
    constructor(private http: HttpClient){
        
    }
    getCardInfo() {
        return this.http.get<Card[]>(this.baseUrl + this.featuredCardsDataEndpoints);
    }
}