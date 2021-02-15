// https://www.codewars.com/kata/59cfc000aeb2844d16000075

function capitalize(s) {
    return [forLetters(s), forLetters(s, true)];
};

function forLetters(word, bool = false) {
    let result = ""
    let option = bool
    for (val of [...word]) {
        if (option) {
            result += val
            option = false
        } else {
            result += val.toUpperCase()
            option = true
        }
    }
    return result
}