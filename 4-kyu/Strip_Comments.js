// https://www.codewars.com/kata/51c8e37cee245da6b40000bd

const solution = (input, markers) => input.split('\n').map(line => markers.reduce((a, marker) => a.split(marker)[0].trim(), line)).join('\n')