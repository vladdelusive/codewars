// https://www.codewars.com/kata/529b54d9aba78c924d00088e

var format = function (str, obj) {
    // const objKeys = Object.keys(obj)
    const allBr = str.match(/\{(.+?)\}/g)//.filter(e => objKeys.includes(e.slice(1, -1)))
    return allBr.reduce(({ s, last }, e) => {
        const objK = obj[e.slice(1, -1)]
        if (typeof objK === "number" || typeof objK === "string") {
            const lStr = s.slice(last).replace(e, objK);
            s = s.slice(0, last) + lStr;
            last = s.search(objK) + objK.length
            return { last, s }
        }
        return { s, last }
    }, { s: str, last: 0 }).s

};