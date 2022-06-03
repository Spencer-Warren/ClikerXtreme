import { numDisplay } from './numHelper.js'

export class upgradeButton {
    constructor(name, price, typeOfThing, mult) {
        this.name = name;
        this.mult = mult
        this.price = price
        this.amount = 0
        this.priceMult = mult *= price
        this.typeOfThing = typeOfThing
        this.div = document.createElement("div");
        this.div.className = name + " Upgrade";
        this.button = document.createElement("button");
        this.button.id = this.name + " Upgrade";
        this.button.innerHTML = `Buy 1 ${this.name} ${this.typeOfThing} - ${this.price}  ${this.name}`
        document.getElementById("content").appendChild(this.div);
        document.getElementById("content").appendChild(this.button);
        this.update();
    }

    update() {
        this.div.innerHTML = `${this.amount} - ${ this.name } ${ this.typeOfThing }`
    }


}