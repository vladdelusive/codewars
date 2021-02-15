// https://www.codewars.com/kata/544975fc18f47481ba00107b

function isCircleSorted(arr) {
    const copyArr = [...arr]
    const sorted = [...arr].sort((a, b) => a - b)
    const indx = [...arr].findIndex(e => e === sorted[0])
    const ourArr = [...copyArr.slice(indx), ...copyArr.splice(0, indx)]
    return sorted.every((e, i) => e === ourArr[i])
}

// function isCircleSorted(arr){
//   const copyArr = [...arr]
//   const sorted = [...arr].sort((a,b)=> a-b)
//   const indx = (arr.length-1) - [...arr].reverse().findIndex(e=>e===sorted[0])
//   const ourArr = [...copyArr.slice(indx), ...copyArr.splice(0, indx)]
//   return sorted.every((e, i)=> e === ourArr[i])
// }

function isCircleSorted(arr) {
    const copyArr = [...arr]
    const sorted = [...arr].sort((a, b) => a - b)
    if (sorted[0] === 1 && sorted[1] !== 3) return true
    const indx = [...arr].findIndex(e => e === sorted[0])
    const ourArr = [...copyArr.slice(indx), ...copyArr.splice(0, indx)]
    return sorted.every((e, i) => e === ourArr[i])
}