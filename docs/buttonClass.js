import { numDisplay } from './numHelper.js'
export class Item {

    constructor(name) {
        console.log(name);
        this.count = 0;
        this.name = name;
        this.div = document.createElement("div");
        this.div.className = name;
        this.button = document.createElement("button");
        this.button.id = this.name;
        this.button.innerHTML = "More " + this.name + "s";
        document.getElementById("content").appendChild(this.div);
        document.getElementById("content").appendChild(this.button);
    }

    update() {
        this.div.innerHTML = this.name + ": " + numDisplay(this.count);
    }
}