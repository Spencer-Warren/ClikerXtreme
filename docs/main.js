import { Item } from './Item.js'
import { Station } from './Station.js'
import { autoSave } from './save-load.js';
import { autoLoad } from './save-load.js';

// init items
var itemNames = ["Rock", "Stick", "Sand"];
var items = {};
for (const name of itemNames) {
    items[name] = new Item(name);
    document.getElementById(name + "-button").addEventListener("click", function() { items[name].add(1) });
}

// init upgrades
var upgrades = [
        new Station("Rock Miner", 10, 1.2, items['Rock']),
        new Station("Stick Gather", 10, 1.5, items['Stick']),
        new Station("Sand Shoveler", 10, 1.7, items['Sand'])
]

//add event listener
for (const station of upgrades) {
    document.getElementById(station.name+"-button")
        .addEventListener("click", function() {
            console.log(station.item.count)
            if (station.item.count >= station.price) {
                station.count += 1
                station.item.count -= station.price
                station.update()
                station.item.update()
            }
        })
}
// init Saving
var idSave = 0;
var AS = new autoSave(idSave);
document.getElementById(idSave).addEventListener("click", save);
//loading
var AL = new autoLoad(2);
document.getElementById(2).addEventListener("click", load);

//actually saving
function save() {
    for (const name of itemNames) {
        items[name].save();
    }
    for (const up of upgrades) {
        up.save();
    }
}
//load button
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
// save every so often
setInterval(function() {
    save();
    console.log(" ~ Auto Saved ~ ");
}, 45000);

setInterval(increment, 1000);

function increment() {

}