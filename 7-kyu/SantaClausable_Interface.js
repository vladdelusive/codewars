// https://www.codewars.com/kata/52b50a20fa0e77b304000103

const isSantaClausable = obj => ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(methodName => typeof obj[methodName] === 'function')