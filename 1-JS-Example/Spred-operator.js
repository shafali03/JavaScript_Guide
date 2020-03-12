// The spread operator can be used in function calls, array literals and object literals.


myFunction(...iterableObj)


function sum( x, y, z) {
  return x + y + z;
}

const numbers = [ 1, 2, 3];

console.log( sum(...numbers) ); // 6

// Here we are adding up some numbers to pass our numbers to the function we use the spread operator. The function only accepts the first three element so it will ignore the rest of the numbers





[...iterableObj, '4', 'five', 6];



const arr1 = ["Cat", "Dog"];
const arr2 = ["Horse", "Camel"]

const arr3 = [...arr1, "Tiger", ...arr2];

console.log( arr3 );
// ["Cat", "Dog", "Tiger", "Horse", "Camel"]





// We can also spread character out in an array

const name = "Friends"
const nameArr = [...name];
console.log ( nameArr);

// returns: ["F", "r", "i", "e", "n", "d", "s"]



// Make a copy of the array


const original = ['Cat', 'Dog', 'Horse', 'Bird']

const copy = original;

copy.push('Lion')

console.log( original)
console.log( copy )

// ["Cat", "Dog", "Horse", "Bird", "Lion"]
// ["Cat", "Dog", "Horse", "Bird", "Lion"]



const original = ['Cat', 'Dog', 'Horse', 'Bird']

const copy = [...original];

copy.push('Tiger')

console.log( original)
console.log( copy )

// ["Cat", "Dog", "Horse", "Bird"]
// ["Cat", "Dog", "Horse", "Bird", "Tiger"]

// When we update the copy the original remains unchanged, spread only does a shallow copy of the array which means that it only goes one level deep.



// Object literals

let objClone = { ...obj };

const person = { name: "John", age: 25};

const clonedObj = { ...person };

console.log( clonedObj ) 
// { name: "John", age: 31}




// Rest operator

function f(a, b, ...theArgs) {

}

// The syntax looks like the spread operator, the spread operator spread out or expands an iterable into it's individual elements



function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3)) // 6

console.log(sum(1, 2, 3, 4)) // 10

// In the above we're using an Arg in this function so the rest operator does the opposite it collects or condenses all of the elements into a single array instance.

