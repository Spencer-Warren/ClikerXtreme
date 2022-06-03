import { numDisplay } from './numHelper.js'

export class upgradeButton {
    constructor(name, price, typeOfThing, mult) {
        // assign given
        this.name = name;
        this.mult = mult;
        this.price = price;
        this.typeOfThing = typeOfThing;
        // init amount to 0
        this.amount = 0;

        // idk what these are
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
    }

    update() {
        // Set div content
        this.div.innerHTML = `${numDisplay(this.amount)} - ${ this.name } ${ this.typeOfThing }`;
        // Set button inner html
        this.button.innerHTML = `Buy 1 ${this.name} ${this.typeOfThing} - ${this.price}  ${this.name}`;
    }


}