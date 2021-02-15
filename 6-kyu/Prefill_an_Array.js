// https://www.codewars.com/kata/54129112fb7c188740000162

function prefill(n, v) {
    isValidInteger(n)
    const array = [];
    array.length = n;
    array.fill(v)
    return array;
}

function isValidInteger(n) {
    if (typeof n === 'boolean' || !isFinite(n) || !Number.isInteger(Number(n)) || Number(n) < 0)
        throw new TypeError(`${n} is invalid`)
}