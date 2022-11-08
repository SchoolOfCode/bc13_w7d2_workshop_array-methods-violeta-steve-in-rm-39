let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

const multipleOf3 = (number) => number % 3 === 0
const multipleOf5 = (number) => number % 5 === 0
const multipleOf60 = (number) => number % 60 === 0
const multipleOf90 = (number) => number % 90 === 0

console.log(someNumbers.some(multipleOf3))
console.log(someNumbers.some(multipleOf5))
console.log(someNumbers.some(multipleOf60))
console.log(someNumbers.some(multipleOf90))
