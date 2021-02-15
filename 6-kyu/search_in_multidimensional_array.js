// https://www.codewars.com/kata/52840d2b27e9c932ff0016ae

var locate = function (arr, value) {
    const result = []
    function lalala(value) {
        value.map(el => {
            if (Array.isArray(el)) {
                lalala(el)
            } else {
                result.push(el.toString())
            }
        })
    }
    lalala(arr)
    return result.some(val => val === value.toString())
}


// var locate = function(arr,value){
//   return arr.flat(Infinity).find(e=>e===value) ? true : false
// }