// https://www.codewars.com/kata/55f4a44eb72a0fa91600001e

function createMessage(str) {
    return newStr => !newStr ? str : createMessage(str + ' ' + newStr);
}