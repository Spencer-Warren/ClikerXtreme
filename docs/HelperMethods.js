var Symbols = ["K", "M"];
var smallFormatter = Intl.NumberFormat('en', {notation: 'compact', minimumFractionDigits: 2, maximumFractionDigits: 2});
var largeFormatter = Intl.NumberFormat('en', {notation: 'scientific', minimumFractionDigits: 2, maximumFractionDigits: 2});

export function numDisplay(num) {
    if (num < 1000) return num;
    else if (num < 1E15) return smallFormatter.format(num);
    else return largeFormatter .format(num);
}

export function createEl(type, inner="", id="", setClass="", idToAdd="content"){
    var element = document.createElement(type);
    if(inner !== "") element.innerHTML = inner;
    if(id !== "") element.id = id;
    if(setClass !== "") element.className = setClass;
    if(idToAdd !== "") document.getElementById(idToAdd).appendChild(element);
    return element
}
