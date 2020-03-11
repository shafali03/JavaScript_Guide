 // Immediately
// Invoked
// Function
// Expression

// Normal function

function multiply(a, b) {
  return a * b;
}

console.log( multiply(2, 5)); // 10




// same example as above with IFFE

(function(a,b) {
  return a * b; // 10
})(2,5);


// with arrow function
((a, b) => {
  return a * b; // 10
})(2, 5); // call the function, this function can never be called again




var name = 'Joe';


(function(a,b) {
  var name = 'Bob';
  console.log(name); // Bob
})();

console.log(name) // Joe

// The name variable in IFFE in Bob and the outside is Joe, with ES6 accomplish the same thing with let and const



var name = "Joe";

{
  var name = 'Bob';
  console.log(name) // Bob
}

console.log(name) // Bob
// Var is still a global score






// ES6 let

let name = "Joe";

{
  let name = 'Bob';
  console.log(name) // Bob
}

console.log(name) // Joe
// The name variable within the block is locally scoped and is not accessible from outside of the block


