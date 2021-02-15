// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
    let number = num.toString()
    let i = 0
    for (i; number.length !== 1; i++) {
        number = [...number].reduce((acc, el) => acc * el, 1).toString()
    }
    return i
}