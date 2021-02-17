// https://www.codewars.com/kata/51fc3beb41ecc97ee20000c3

function makeLooper(str) {
    let indexLetter = 0;
    return () => {
        if (indexLetter === str.length) {
            indexLetter = 0
        }
        let z;
        return str[z = indexLetter++]
    }
}