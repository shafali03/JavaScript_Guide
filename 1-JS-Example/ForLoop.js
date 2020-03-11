
for ( ["initialExpression" ] ; [ "condition"]; ["incrementExpression" ] ) {

}

// The initialization is only run once to setup the loop variable

// Every time the loop iterate the condition it check if the code need to be execute.

// IncrementExpression is evaluated at the end of each loop



const numbers = []

for (let i = 0; i < 5; i++) {
  numbers.push(i);
}

console.log( numbers ); // [0, 1, 2, 3, 4]



const numbers = []

for (let i = 0; i < 5; i++) {
  if ( i > 2) break;
  numbers.push(i);
}

console.log( numbers ); // [0, 1, 2]

// You can also check if i is greater than 2 if so we will end the loop early.




// Common case for a loop is looping through an array to get the values.

const numbers = [10, 9, 8, 7, 6, 5];

for ( let i = 0; i < numbers.length; i++) {
  console.log( number[i]);
}

// 10, 9, 8, 7, 6, 5





// Looping through a multi-dimensional array


const numbers = [[1, 2], [3, 4], [5, 6]];

for ( let i = 0; i < numbers.length; i++ ) {
  for ( let j = 0; j < numbers[i].length; j++) {
    console.log(numbers[i][j]);
    // 1, 2, 3, 4, 5, 6
  }
}

// The first loop is looping through the 3 nested array