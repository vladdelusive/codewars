// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

function zero(smth) {
    let number = 0
    if (smth) return smth(number)
    return number
}

function one(smth) {
    const number = 1
    if (smth) return smth(number)
    return number
}
function two(smth) {
    const number = 2
    if (smth) return smth(number)
    return number
}
function three(smth) {
    const number = 3
    if (smth) return smth(number)
    return number
}
function four(smth) {
    const number = 4
    if (smth) return smth(number)
    return number
}
function five(smth) {
    let number = 5
    if (smth) return smth(number)
    return number
}
function six(smth) {
    const number = 6
    if (smth) return smth(number)
    return number
}
function seven(smth) {
    const number = 7
    if (smth) return smth(number)
    return number
}
function eight(smth) {
    const number = 8
    if (smth) return smth(number)
    return number
}
function nine(smth) {
    const number = 9
    if (smth) return smth(number)
    return number
}

function plus(num) {
    const what = "+", howMuch = num;
    return (number) => Math.floor(eval(`${number}${what}${howMuch}`));
}
function minus(num) {
    const what = "-", howMuch = num;
    return (number) => Math.floor(eval(`${number}${what}${howMuch}`));
}
function times(num) {
    const what = "*", howMuch = num;
    return (number) => Math.floor(eval(`${number}${what}${howMuch}`));
}
function dividedBy(num) {
    const what = "/", howMuch = num;
    return (number) => Math.floor(eval(`${number}${what}${howMuch}`));
}