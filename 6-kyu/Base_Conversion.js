// https://www.codewars.com/kata/526a569ca578d7e6e300034e

function convert(input, source, target) {
    if (source === target) {
        return input;
    }

    let sourceValue = input.split('').reverse().reduce((acc, val, digitPos) => {
        return acc + (source.length ** digitPos) * source.indexOf(val);
    }, 0);

    if (sourceValue === 0) {
        return target[0];
    }

    let targetValue = '';
    while (sourceValue > 0) {
        targetValue += target[sourceValue % target.length];
        sourceValue = Math.floor(sourceValue / target.length);
    }
    return targetValue.split('').reverse().join('');
}