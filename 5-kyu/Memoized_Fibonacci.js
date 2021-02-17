// https://www.codewars.com/kata/529adbf7533b761c560004e5

const fibonacci = (() => {
    const memo = new Map;
    return (n) => {
        if (memo[n]) return memo[n]
        if (n === 0 || n === 1) return n;
        return memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    }
})()

const memo = new Map;
function fibonacci(n) {
    if (memo[n]) return memo[n]
    if (n == 0 || n == 1) return n;
    return memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
}