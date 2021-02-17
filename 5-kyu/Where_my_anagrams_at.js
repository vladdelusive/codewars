// https://www.codewars.com/kata/523a86aa4230ebb5420001e1

const anagrams = ([...word], words) => {
    const w = word.sort().join("")
    return words.reduce((a, e) => [...e].sort().join("") === w ? [...a, e] : a, [])
}