// https://www.codewars.com/kata/52fee0a131b8158492000120

function createArgumentMap(func, ...names) {
    const params = func.toString().match(/\((.+?)\)/)
    if (params && params[1]) {
        return params[1].replace(/\s/g, '').split(",").reduce((a, k, i) => ({ ...a, [k]: names[i] }), {})
    } else {
        return []
    }
}