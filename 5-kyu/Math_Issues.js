// https://www.codewars.com/kata/5267faf57526ea542e0007fb

Math.round = function (number) {
    return +number.toFixed()
};

Math.ceil = function (number) {
    return number % 1 === 0 ? parseInt(number) : parseInt(number + 1);
};

Math.floor = function (number) {
    return parseInt(number)
};