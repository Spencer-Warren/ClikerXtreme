import { BasicItem } from './BasicItem.js';
export class Station extends BasicItem {
    constructor(name, price, mult, item) {
        super(name);
        // assign given
        this.price = price;
        this.mult = mult;
        this.item = item;

        // Multiplies the price
        this.price = mult * price;

        // Button to buy upgrade
        this.button.innerHTML = `Buy 1 ${this.name} - ${this.price}  ${item.name}`;

        // init inner html
        super.update();

        //add a interval to add items
        setInterval(Station.increment, 1000, this);
    }

    static increment(station){
        console.log(station.item.count);
        station.item.add(station.count);
    }
      
}