// https://www.codewars.com/kata/59c633e7dcc4053512000073

const solve = (s) => Math.max(...s.split(/[aeiou]+/).map(word => [...word].reduce((a, b) => a + b.charCodeAt() - 96, 0)));