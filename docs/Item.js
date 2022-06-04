import { BasicItem } from './BasicItem.js';
export class Item extends BasicItem {
    constructor(name) {
        super(name);
        this.button.innerHTML = `More ${this.name}s`;
    }
}