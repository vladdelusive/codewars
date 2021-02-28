// https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript

function iqTest(numbers) {
    const obj = { odd: { first: null, amount: 0 }, even: { first: null, amount: 0 } }
    numbers.split(" ").forEach((num, index) => {
        if (+num % 2 === 0) {
            if (!obj.even.first) obj.even.first = index + 1;
            obj.even.amount++;
        } else {
            if (!obj.odd.first) obj.odd.first = index + 1;
            obj.odd.amount++;
        }
    })
    return obj.odd.amount < obj.even.amount ? obj.odd.first : obj.even.first;
}