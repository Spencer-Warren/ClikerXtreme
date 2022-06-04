import { BasicItem } from './BasicItem.js'
export class Station extends BasicItem {
    constructor(name, price, typeOfThing, mult, item) {
        super(name);
        // assign given
        this.name = name;
        this.mult = mult;
        this.price = price;
        this.typeOfThing = typeOfThing;
        this.item = item;
        // init amount to 0
        this.amount = 0;

        // Multiplies the price
        this.priceMult = mult *= price;

        // Div of num of item and name
        this.div = document.createElement("div");
        this.div.id = `${this.name}-${this.typeOfThing}`;

        // Button to buy upgrade
        this.button = document.createElement("button");
        this.button.id = this.name + " Upgrade";

        // Add div and button to doc
        document.getElementById("content").appendChild(this.div);
        document.getElementById("content").appendChild(this.button);
        // init inner html
        this.update();
        // auto increment
        setInterval(this.increment, 1000);
    }

    increment() {
        this.items.add(this.amount);
    }
}