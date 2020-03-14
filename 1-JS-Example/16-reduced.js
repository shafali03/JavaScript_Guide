// let reduced = arr.reduce(function( accumulator, currentValue, index, array ), initialValue)

// Basic syntax of reduce




const number = [ 1, 8, 7, 4, 9, 11]

let sum = 0;
for( number of numbers ) {
  sum += number;
}

console.log( sum ); // 40

// Create a variable called sum set value to 0. Then create a for loop that adds each number to the sum variable and ending up with an accumulated sum.




const number = [ 1, 8, 7, 4, 9, 11]


let sum = number.reduce((total, value) => {
  return total + value
}, 0);

console.log( sum ) // 40

// Assign the variable to the reduce method, with our accumulator which we called total and value, now we will return the total plus the value and also set our initial value to zero. Now as iterate through the array it adds all the numbers to the accumulator and end up with the total.



// refactor 

const number = [ 1, 8, 7, 4, 9, 11]


let sum = number.reduce((total, value) =>  total + value )

console.log( sum ) // 40