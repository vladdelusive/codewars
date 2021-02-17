function incrementString(strng) {
    let matchNum = strng.match(/\d+/)
    if (!matchNum) return strng + "1"
    let numArr = [...matchNum[0]];
    const firstComponent = strng.slice(0, -numArr.length);
    for (let i = numArr.length - 1; i >= 0; i--) {
        if (numArr[i] < 9) {
            numArr[i]++;
            break;
        } else if (i === 0 && +numArr[i] === 9) {
            numArr[i] = 10;
        } else if (+numArr[i] === 9) {
            numArr[i] = 0;
        }
    }
    const x = `${firstComponent}${numArr.join("")}`;
    return x.length ? x : "1";
}