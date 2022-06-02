var Symbols = ["K", "M"];
var smallFormatter = Intl.NumberFormat('en', {notation: 'compact', minimumFractionDigits: 2, maximumFractionDigits: 2});
var largeFormatter = Intl.NumberFormat('en', {notation: 'scientific', minimumFractionDigits: 2, maximumFractionDigits: 2});

export function numDisplay(num) {
    // if (num > 1000) return (num/1000).toFixed(2) + " K";
    // if (num > 1000000) return (num/1000000).toFixed(2) + " M";
    if (num < 1000) return num;
    else if (num < 1E15) return smallFormatter.format(num);
    else return largeFormatter .format(num);
}