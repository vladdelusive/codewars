// https://www.codewars.com/kata/526571aae218b8ee490006f4

const countBits = (n) => [...(n >>> 0).toString(2)].reduce((a, e) => e == 1 ? a + +e : a, 0)