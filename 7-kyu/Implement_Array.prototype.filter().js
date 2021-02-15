// https://www.codewars.com/kata/56dd9b84fe5754786f0014f7

Array.prototype.filter = function (a) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (a(this[i])) newArray.push(this[i]);
    }
    return newArray;
}