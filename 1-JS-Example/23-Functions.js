function myFunction( param1, param2) {
  // 

}

// A function is a block  of code to designed to perform a specific task and to be reusable a standard named function is defined with a function keyword  


// Parameter are params1, and param 2, and the values received by the function when it is invoked or  called the parameters or arguments are then used with the code block as variables;


myFunction(); // call a function



var myButton = document.querySelector("button");

myButton.onclick = function() {

}


// shelf invoked like this
function() {

}

// The above function does not have a name this type of function can never be called be called again

// But you can assign a variable to a function and return values from a function  a standard

let x = function() {

}




function multiply( x, y ) {
  return x * y
}

console.log( multiple ( 5, 5) ); //25




let a = multiply(5, 5);
console.log( a ); // 25




function myFunction() {
  let name = "John";
  console.log( name ); // John 
}

console.log( name ); // undefined


// Variable declared within a function become local to the function and cannot be accessed outside of the function.





let x = 5;
let y = 5;

let multiply = function() {
  return x * y // have access to the outside variable this is called scope.
}


console.log( multiply() ); // 25

// Outside of the function would be global scoped and inside and inside  the function is locally scoped.