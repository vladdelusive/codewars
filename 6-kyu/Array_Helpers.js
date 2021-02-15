// https://www.codewars.com/kata/525d50d2037b7acd6e000534

Array.prototype.square = function () {
    return this.map(el => el ** 2)
}

Array.prototype.cube = function () {
    return this.map(el => el ** 3)
}

Array.prototype.sum = function () {
    return this.reduce((acc, item) => acc + item)
}

Array.prototype.average = function () {
    let average = this.reduce((acc, item) => acc + item, 0);
    return average / this.length;
}

Array.prototype.even = function () {
    return this.filter(el => el % 2 == 0)
}

Array.prototype.odd = function () {
    return this.filter(el => !(el % 2 == 0)) // el & 1
}