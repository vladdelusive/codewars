// https://www.codewars.com/kata/5307ff5b588fe6d7000000a5

const once = (fn) => {
    let onlyOnce = true
    return (...params) => {
        if (onlyOnce) {
            onlyOnce = undefined
            return fn.apply(null, params)
        } else {
            return onlyOnce;
        }
    };
}