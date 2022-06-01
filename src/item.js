import {numDisplay} from './helper.js'
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
        document.body.appendChild(this.div);
        document.body.appendChild(this.button);
    }

    update() { 
        this.div.innerHTML = this.name + ": " + numDisplay(this.count);
    }
}