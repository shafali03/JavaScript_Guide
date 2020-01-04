
// Reusable code with functions

function ourReusableFunction() {
  console.log("Hi")
}

ourReusableFunction(); // invoked



function reusableFunction() {
  console.log("Hi World")
}

reusableFunction();





// Functions with Arguments

function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}

ourFunctionWithArgs(10, 5); // 5




function functionWithArgs(a, b) {
  console.log(a + b)
}

functionWithArgs(10 + 5); // 15







// Global Scope and functions


var myGlobal = 10;


function fun1() {

  // oopsGlobal is a variable without var if we add var then this variable becomes scope to function fun1, without the var oopsGlobal automatically becomes a Global variable
  oopsGlobal = 5;
}


function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output)
}


fun1();
fun2();




// Local Scope and function

function myLocalScope() {
  var myVar = 5;
  console.log(myVar)
}

myLocalScope(); // call the function only going to log myVar 5

console.log(myVar); // This will try to access myVar is not defined








// Global vs Local  Scope in function

var outerWear = "T-Shirt"; // global function

function myOutfit() {
  var outerWear = "sweater"; // local variable outerwear took precedence over the global variable.

  return outerWear
}

console.log(myOutfit()); // sweater
// The local variable takes precedence over global variable

console.log(outerWear) // T-Shirt global variable





// Return a Value from a Function with Return


function minusSeven(num) {
  return num - 7;
}
console.log(minusSeven(10)); // 3



function timesFive(num) {
  return num * 5;
}
console.log(timesFive(5)); // 25






// Understanding Undefined Value Returned from a Function


var sum = 0;
function addThree() {
  sum = sum + 3;
}
// if you don't specify a return value is just undefined


function addFive() {
  sum += 5 // if we log this out it will be undefined
}




// Assignment with a Returned Value

var changed = 0

function change(num) {
  return (num + 5) / 3
}

changed = change(10)


var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);





// Boolean

function welcome() {
  return true;
}



