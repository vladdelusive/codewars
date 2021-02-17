// https://www.codewars.com/kata/52597aa56021e91c93000cb0

const moveZeros = (arr) => {
    const withoutZeros = arr.filter(e => e !== 0)
    return withoutZeros.concat(Array(arr.length - withoutZeros.length).fill(0))
}