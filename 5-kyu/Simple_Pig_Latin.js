// https://www.codewars.com/kata/520b9d2ad5c005041100000f

const pigIt = (str) => str.split(" ").reduce((a, [...e], i, arr) => {
    const firstEl = e.length > 1 || i < arr.length - 1 ? e[0] + "ay" : e
    return a + e.slice(1).join("") + firstEl + (i !== arr.length - 1 ? " " : "")
}, "")