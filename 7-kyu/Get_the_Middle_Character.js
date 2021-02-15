// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s) {
    if (s.length == 1) return s[0];
    let result;
    if (s.length % 2 == 0) {
        result = s[s.length / 2 - 1];
        result += s[s.length / 2];
        return result;
    } else {
        result = s[(s.length - 1) / 2];
        return result;
    }
}
