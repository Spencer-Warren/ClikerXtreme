import { Item } from './buttonClass.js'
import { upgradeButton } from './upgradeClass.js'
import { autoSave } from './save-load.js';
import { autoLoad } from './save-load.js';

// init items
var itemNames = ['Rock', "Stick", "Sand"];
var items = {};
for (const name of itemNames) {
    items[name] = new Item(name);
    document.getElementById(name + "-button").addEventListener("click", function() { items[name].add(1) });
}

// init upgrades
var upgrades = [
        new upgradeButton("Rock", 10, "Miner", 1.2),
        new upgradeButton("Stick", 10, "Gatherer", 1.5),
        new upgradeButton("Sand", 10, "Shoveler", 1.7)
    ]
    //add event listener
for (const btn of upgrades) {
    document.getElementById(btn.name + " Upgrade")
        .addEventListener("click", function() {
            var item = items[btn.name]
            if (item.count >= btn.price) {
                btn.amount += 1
                item.count -= btn.price
                btn.priceMult
                Math.round(btn.priceMult)
                btn.update()
                item.update()
            }
        })
}
var idSave = 0;
var AS = new autoSave(idSave);
document.getElementById(idSave).addEventListener("click", save);

var AL = new autoLoad(2);
document.getElementById(2).addEventListener("click", load);


function save() {
    for (const name of itemNames) {
        items[name].save();
    }
    for (const up of upgrades) {
        up.save();
    }
}

function load() {
    for (const name of itemNames) {
        // if item doesnt exist in local storage ignore
        items[name].load();
    }
    for (const up of upgrades) {
        up.load();
    }
}

// Auto load on page load
document.addEventListener("DOMContentLoaded", load);