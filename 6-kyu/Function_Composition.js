// https://www.codewars.com/kata/5421c6a2dda52688f6000af8

function compose(f, g) {
    return (a) => (arguments.length > 1) ? f.call(null, g.apply(null, arguments)) : f(g(a))
}