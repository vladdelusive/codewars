// https://www.codewars.com/kata/54566695309908a6590005f1

function crossProduct(v1, v2) {
    if (!(v1 instanceof Array) || !(v2 instanceof Array) || v1.length !== 3 || v2.length !== 3) {
        throw "Arguments are not 3D vectors!"
    }
    let a, b, c;
    a = (v1[1] * v2[2]) - (v1[2] * v2[1]);
    b = ((v1[0] * v2[2]) - (v1[2] * v2[0]));
    if (b !== 0) b *= -1;
    c = (v1[0] * v2[1]) - (v1[1] * v2[0]);
    return [a, b, c];
}