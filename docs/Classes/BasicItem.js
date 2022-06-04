import { numDisplay } from '../HelperMethods.js'
import { createEl } from '../HelperMethods.js'
export class BasicItem {
    constructor(name) {
        this.count = 0;
        this.name = name;

        // Create outer div
        this.mainDiv = createEl("div", `${this.name} - `);

        // init number div to display count
        this.numDiv = createEl("div", this.count, this.name, 'item-count', "");

        // Button and inner
        this.button = createEl("button", "", this.name + "-button", 'item-button', "");
        
        this.mainDiv.appendChild(this.numDiv);
        this.mainDiv.appendChild(this.button);
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
        if (localStorage.getItem(this.name) !== null) {
            this.count = JSON.parse(localStorage.getItem(this.name));
            this.update();
        }
    }
}