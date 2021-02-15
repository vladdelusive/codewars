// https://www.codewars.com/kata/52eb114b2d55f0e69800078d

function SubstitutionCipher([...abc1V], [...abc2V]) {
    this.encode = function (str) {
        return [...str].reduce((acc, el) => acc + (abc2V[abc1V.findIndex((e) => e === el)] || el), "")
    }
    this.decode = function (str) {
        return [...str].reduce((acc, el) => acc + (abc1V[abc2V.findIndex((e) => e === el)] || el), "")
    }
}

function SubstitutionCipher(abc1, abc2) {
    this.abc1V = [...abc1]
    this.abc2V = [...abc2]
    this.encode = function (str) {
        return [...str].reduce((acc, el) => acc + (this.abc2V[this.abc1V.findIndex((e) => e === el)] || el), "")
    }
    this.decode = function (str) {
        return [...str].reduce((acc, el) => acc + (this.abc1V[this.abc2V.findIndex((e) => e === el)] || el), "")
    }
}