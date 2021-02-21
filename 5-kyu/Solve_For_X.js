// https://www.codewars.com/kata/59c2e2a36bddd2707e000079

function solveForX(equation) {
    let res;
    let x = -100;
    while (res === undefined && x < 1000) {
        eval(equation.replace('x', x).replace('=', '==')) ? res = x : [];
        x++;
    }
    return res
}