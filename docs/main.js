import { Item } from './buttonClass.js'
import { upgradeButton } from './upgradeClass.js'

let lastTime


// init rocks
var itemNames = ['Rock', "Stick", "Sand"];
var items = {};
for (const name of itemNames) {
    items[name] = new Item(name);
    document.getElementById(name + "-button").addEventListener("click", function() { items[name].add(1).update() });
}
var btn1 = new upgradeButton("Rock", 10, "Miner", 2)
var btn2 = new upgradeButton("Stick", 100, "Gatherer", 2)
var btn3 = new upgradeButton("Sand", 1000, "Shoveler", 2)
var upgradeNames = [btn1, btn2]
var upgradeDict = {}
for (const btn of upgradeNames) {
    document.getElementById(btn.name + " Upgrade").addEventListener("click", function() {
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

//ignore
// function frame() {

//     for (const [key, value] of Object.entries(items)) value.update()
//     setTimeout(frame, 1500);
// }

// frame()