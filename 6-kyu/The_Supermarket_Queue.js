// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

const queueTime = (customers, n) => {
    let checkoutStack = new Array(n).fill(1);
    let i = 0;
    for (i; customers.length !== 0 || checkoutStack.some(e => e > 0); i++) {
        checkoutStack = checkoutStack.reduce((a, e) => e > 0 ? [...a, e - 1] : [...a, e], []);
        for (let j = 0; j < n; j++) {
            if (checkoutStack[j] === 0 && customers.length) {
                checkoutStack[j] = customers.shift();
                if (j === n) break;
            }
        }
    }
    return i - 1;
}