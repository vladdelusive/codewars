// https://www.codewars.com/kata/513fa1d75e4297ba38000003

function flatten(...arr) {
    return arr.reduce((a, e) => {
        const el = (e instanceof Array ? flat(e) : e)
        return a.concat(el)
    }, [])
}

// function flatten(args) {
//     const arr = Array.isArray(args) ? args : [...arguments]
//     return arr.reduce((a, e) => {
//         const el = (e instanceof Array ? flatten(e) : e)
//         return a.concat(el)
//     }, [])
// }