import { Item } from './item.js'

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
var itemNames = ['rock', "diamond", "Stick", "table"];
var items = {};
for(const name of itemNames){
    items[name] = new Item(name);
    document.getElementById(name).addEventListener("click", function() {items[name].count +=1});
}