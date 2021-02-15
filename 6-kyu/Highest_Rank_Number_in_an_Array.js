// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

function highestRank(arr) {
    const obj = arr.reduce((a, e) => a[e] ? { ...a, [e]: 1 + a[e] } : { ...a, [e]: 1 }, {})
    return +Object.entries(obj).reduce((a, [k, v]) => v > a[1] ? [k, v] : v === a[1] && k > a[0] ? [k, v] : a, [0, 0])[0]
}