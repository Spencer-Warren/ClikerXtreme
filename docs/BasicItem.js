import { numDisplay } from './numHelper.js'
export class BasicItem {
    constructor(name) {
        this.count = 0;
        this.name = name;

        // Create outer div
        this.mainDiv = document.createElement("div");
        this.mainDiv.innerHTML = `${this.name} - `;

        // init number div to display count
        this.numDiv = document.createElement("div");
        this.numDiv.id = name;
        this.numDiv.className = 'item-count';

        // Button and inner
        this.button = document.createElement("button");
        this.button.id = this.name + "-button";
        this.button.className = 'item-button';

        // Add all the things
        this.mainDiv.appendChild(this.numDiv);
        this.mainDiv.appendChild(this.button);
        document.getElementById("content").appendChild(this.mainDiv);

        // Display when all init
        this.update()
    }

    update() {
        // When value changes, change on page
        this.numDiv.innerHTML = numDisplay(this.count);
        return this; // allow some magic
    }

    add(amount) {
        // Increase count and update on screen
        this.count += amount;
        this.update();
        return this; // allow some magic
    }

    // for loading saves
    set(newCount) {
        this.count = newCount;
        this.update();
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
}