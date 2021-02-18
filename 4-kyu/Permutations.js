// https://www.codewars.com/kata/5254ca2719453dcc0b00027d

const permutations = (str) =>
    str.length <= 1
        ? [str]
        : [...(new Set(
            [...str]
                .map((el, i) => permutations(str.substring(0, i) + str.substring(i + 1)).map(e => el + e))
                .reduce((a, e) => a.concat(e), [])
        ))]