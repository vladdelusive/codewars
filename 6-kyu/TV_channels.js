// https://www.codewars.com/kata/5836dce6966f8d1d43000007

function redarr(arr) {
    const notRepeat = [];
    let step = 0
    return arr.sort().reduce((acc, el, i) => {
        if (notRepeat.find(e => el === e)) {
            step++
            return acc
        }
        notRepeat.push(el)
        return { ...acc, [i - step]: el }
    }, {})
}