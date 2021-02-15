// https://www.codewars.com/kata/598d91785d4ce3ec4f000018

function wordValue(a) {
    return a.map((el, indx) => ++indx * [...el].reduce((a, e) => e === " " ? a : a + e.charCodeAt() - 96, 0))
}