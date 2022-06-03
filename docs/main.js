import { Item } from './buttonClass.js'
import { upgradeButton } from './upgradeClass.js'

// init items
var itemNames = ['Rock', "Stick", "Sand"];
var items = {};
for (const name of itemNames) {
    items[name] = new Item(name);
    document.getElementById(name + "-button").addEventListener("click", function() { items[name].add(1) });
}

// init upgrades
var upgrades = [
    new upgradeButton("Rock", 10, "Miner", 2),
    new upgradeButton("Stick", 100, "Gatherer", 2),
    new upgradeButton("Sand", 1000, "Shoveler", 2)
]

for (const btn of upgrades) {
    document.getElementById(btn.name + " Upgrade")
        .addEventListener("click", function() {
            var item = items[btn.name]
            console.log(item.name)
            if (item.count >= btn.price) {
                btn.amount += 1
                item.count -= btn.price
                btn.update()
                item.update()
            }
        })
}