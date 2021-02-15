// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number) {
    let sum = 0
    for (let i = 0; i < number; i++) sum += (!(i % 3) || !(i % 5)) ? i : 0;
    return sum
}