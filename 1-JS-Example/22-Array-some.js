// arr.some(callback(currentValue, index, array) {

// })


// arr.every(callback(currentValue, index, array) {

// })


const numbers = [3, 6, 14, 9];

let overTen = numbers.some( function(num) {
  return num > 10
});

console.log( ovenTen ); // true



// refactor

const numbers = [ 3, 6, 14, 9 ];

let overTen = numbers.some( num => num > 10);

 console.log( overTen ); // true


