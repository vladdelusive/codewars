// https://www.codewars.com/kata/5fc2a4b9bb2de30012c49609

function orderBreaker(input) {
    if (input[0] > input[1]) return input[0];
    for (index in input) {
        const currentNum = input[index];
        const prevNum = input[+index - 1];
        const prevPrevNum = input[+index - 2]

        if (prevNum > currentNum) {
            return currentNum < prevPrevNum ? currentNum : prevNum
        }
    }
    return "No one breaker"
}