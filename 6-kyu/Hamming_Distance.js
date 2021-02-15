// https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69

function hamming([...a], [...b]) {
    return a.reduce((acc, e, i) => e !== b[i] ? acc + 1 : acc, 0)
}

function hamming([...a], [...b]) {
    let res = 0
    a.map((e, i) => e !== b[i] && res++)
    return res
}