// https://www.codewars.com/kata/5709bdd2f088096786000008

function superSize(num) {
    let numbers = [];
    let numbbb = num + ""
    for (let k = 0; k < numbbb.length; k++) numbers.push(numbbb.substring(k, k + 1));
    let n = numbers.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (numbers[j] < numbers[j + 1]) {
                let t = numbers[j + 1];
                numbers[j + 1] = numbers[j];
                numbers[j] = t;
            }
        }
    }
    return +numbers.reduce((acc, el) => {
        return `${acc}${el}`
    })
}