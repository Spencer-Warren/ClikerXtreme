import { Item } from './buttonClass.js'
import { upgradeButton } from './upgradeClass.js'

let lastTime
function update(time) {
    if (lastTime == null){
        lastTime = time
        window.requestAnimationFrame(update)    
        return
    }
    const delta = time - lastTime
    
    for(const [key, value] of Object.entries(items)) value.update()

    lastTime = time
    
    window.requestAnimationFrame(update)    
}

window.requestAnimationFrame(update)
// init rocks
var itemNames = ['Rock', "Stick", "Sand"];
var items = {};
for(const name of itemNames){
    items[name] = new Item(name);
    document.getElementById(name).addEventListener("click", function() {items[name].count +=1});
}
btn1 = new upgradeButton("Rocks ", 10, " Miner ", 2)
btn2 = new upgradeButton("Sticks ", 100, " Gatherer ", 2)
btn3 = new upgradeButton("Sand", 1000, "Shovelers", 2)
var upgradeNames = []
var upgradeDict = {}
for(const btn of upgradeNames){
    document.getElementById(btn).addEventListener("click", function(){
        if(Item.count >= btn.price){
            btn.amount += 1
            btn.priceMult
            btn.price -= Item.count
        }
    })
}
