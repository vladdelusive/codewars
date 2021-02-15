// https://www.codewars.com/kata/56ba8a9b022c16017d0001f3

function sequence(n, pattern) {
    let type = typeof pattern;
    if (type === 'function') {
        const array = Array.from({ length: n });
        return array.fill(pattern).map(pattern);
    } else {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(pattern);
        }
        return arr;
    }
}