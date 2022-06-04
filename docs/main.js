import { Item } from './Classes/Item.js'
import { Station } from './Classes/Station.js'
import { saveIO } from './Classes/SaveIO.js'
// init items
var itemNames = ["Rock", "Stick", "Sand"];
var items = [
    new Item("Rock"),
    new Item("Stick"),
    new Item("Sand"),
];
var stations = [
    new Station("Rock Miner", 10, 1.2, items[0]),
    new Station("Stick Gather", 10, 1.5, items[1]),
    new Station("Sand Shoveler", 10, 1.7, items[2])
];

var allItems = items.concat(stations);

for (const item of items) {
    document.getElementById(item.name + "-button")
        .addEventListener("click", function () { item.add(1) });
}

//add event listener
for (const station of stations) {
    document.getElementById(station.name + "-button")
        .addEventListener("click", function () {
            if (station.item.count >= station.price) {
                station.add(1);
                station.item.add(-station.price);
            }
        })
}

var save = new saveIO(allItems);
document.getElementById("save").addEventListener("click", function () { save.save() });
document.getElementById("load").addEventListener("click", function () { save.load() });

// Auto load on page load
document.addEventListener("DOMContentLoaded", save.load());
// save every so often
setInterval(function () {
    // save.save();
    console.log(" ~ Auto Saved ~ ");
}, 45000);
