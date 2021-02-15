// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

const multiplicationTable = (size) => {
    const array = [];
    for (let i = 1; i <= size; i++) {
        const array2 = [];
        for (let j = 1; j <= size; j++) {
            array2.push(i * j);
        }
        array.push(array2);
    }
    return array;
}