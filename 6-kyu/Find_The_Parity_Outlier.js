// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers) {
    const { odd, even } = integers.reduce(({ odd, even }, e) => e % 2 === 0 ? { odd: ++odd, even } : { even: ++even, odd }, { odd: 0, even: 0 })
    return odd > even ? integers.find(e => e % 2 !== 0) : integers.find(e => e % 2 === 0)
}