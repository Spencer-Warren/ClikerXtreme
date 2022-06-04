import { numDisplay } from './numHelper.js'
export class Item {

    constructor(name) {
        this.count = 0;
        this.name = name;

        // Create outer div
        this.nameDiv = document.createElement("div");
        this.nameDiv.innerHTML = `${this.name}s:`;

        // init number div to display count
        this.numDiv = document.createElement("div");
        this.numDiv.id = name;
        this.numDiv.className = 'item-count';

        // Button and inner
        this.button = document.createElement("button");
        this.button.id = this.name + "-button";
        this.button.className = 'item-button';
        this.button.innerHTML = "More " + this.name + "s";

        // Add all the things
        this.nameDiv.appendChild(this.numDiv);
        this.nameDiv.appendChild(this.button);
        document.getElementById("content").appendChild(this.nameDiv);

        // Display when all init
        this.update()
    }

    update() {
        // When value changes, change on page
        Math.round(this.count)
        this.numDiv.innerHTML = numDisplay(this.count);
        return this; // allow some magic

    }

    // for loading saves
    set(amount) {
        this.count = amount
        this.update()
    }
    save() {
        localStorage.setItem(this.name, JSON.stringify(this.count));
    }
    load() {
        console.log(this.name)
        if (localStorage.getItem(this.name) !== null) {
            this.count = JSON.parse(localStorage.getItem(this.name));
            this.update();
        }
    }

    add(amount) {
        // Increase count and update on screen
        this.count += amount;
        this.update();
        return this; // allow some magic
    }
}