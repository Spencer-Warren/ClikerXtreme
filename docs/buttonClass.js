import { numDisplay } from './numHelper.js'
export class Item {

    constructor(name) {
        this.count = 0;
        this.name = name;

        this.nameDiv = document.createElement("div");
        this.nameDiv.innerHTML = `${this.name}s:`;

        this.numDiv = document.createElement("div");
        this.numDiv.id = name;
        this.numDiv.className = 'item-count';

        this.button = document.createElement("button");
        this.button.id = this.name + "-button";
        this.button.className = 'item-button';
        this.button.innerHTML = "More " + this.name + "s";

        this.nameDiv.appendChild(this.numDiv);
        this.nameDiv.appendChild(this.button);
        document.getElementById("content").appendChild(this.nameDiv);
        this.update()
    }

    update() {
        this.numDiv.innerHTML = numDisplay(this.count);
        return this;
    }
    add(amount) {
        this.count += amount;
        return this;
    }
}