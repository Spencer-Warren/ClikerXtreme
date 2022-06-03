import {numDisplay} from './numHelper.js'

export class upgradeButton{
    constructor(name, price, typeOfThing, mult) {
        console.log(name);
        this.name = name;
        this.mult = mult
        this.price = price
        this.amount = 0
        this.priceMult = mult *= price
        this.typeOfThing = typeOfThing
        this.div = document.createElement("div");
        this.div.className = name;
        this.button = document.createElement("button");
        this.button.id = this.name;
        this.button.innerHTML = "Buy 1 " + this.name + this.typeOfThing + " - " + this.priceMult + " " +  this.name
        document.body.appendChild(this.div);
        document.body.appendChild(this.button);
    }

    update() { 
        this.div.innerHTML = this.name + this.typeOfThing + " - " + this.priceMult + " " + this.name
    }


}