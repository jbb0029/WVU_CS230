export class Card {
    title:string;
    description:string;
    price: string;
    imagePath: string;

    constructor({title, description, price, imagePath} :
        {title:string, description:string, price: string, imagePath: string}){
            this.title = title;
            this.description = description;
            this.price = price;
            this.imagePath = imagePath;
        }
}