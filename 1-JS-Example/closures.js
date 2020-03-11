
let outsideVariable = true; // outside


const myFunction = () => {


}

// A closure gives you access to anything outside of the current scope. 




//In Javascript closures are created every time a function is created. Below is a closure function which has access to the variable within it


function add() {
  const a = 3;
  console.log(a + a); // 6
}

add();







// The a variable still has access to the variable

const a = 3; // Global Scope

function add() {      // function scope
  console.log(a + a); // function scope
}

add(); // Global Scope


// The global score can also be accessed within the function









let counter = 0;

function add() {
  counter++;
}


add(); // counter = 1
add(); // counter = 2
add(); // counter = 3

// Have a counter which is available to all function, this is a global scope and can be accessed within another function this can be a problem to. 







function add() {
  let counter = 0;
  function plus() { counter++; }
  plus()
  return counter
}


add(); // counter = 1
add(); // counter = 2
add(); // counter = 3


// The variable has been moved within the function and then included a inner function, nesting function have access to the scope above them because of closures. 
// The plus function has access to the counter variable in the parent function
// But we still can't access the plus function from outside and we still resetting the counter every time we call the function. 




// This is where self invoked function can be helpful


const add = (function() {
  let counter = 0;
  return function () {counter++; return counter}
})();

add(); // counter = 1
add(); // counter = 2
add(); // counter = 3