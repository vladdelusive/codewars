// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

var maxSequence = function (arr) {
    if (!arr.length) return 0
    let theGreatest = arr[0];
    arr.forEach((e, i) => {
        theGreatest = theGreatest < e ? e : theGreatest;
        let subsequenceSum = e;
        for (let j = i + 1; j < arr.length; j++) {
            subsequenceSum += arr[j];
            theGreatest = theGreatest < subsequenceSum ? subsequenceSum : theGreatest
        }
    })
    return theGreatest < 0 ? 0 : theGreatest;
}