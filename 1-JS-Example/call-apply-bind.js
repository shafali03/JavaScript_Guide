const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

console.log( person.fullName() ); // John Doe

// This object has 3 properties 

// firstName
// lastName
// fullName

// Full name is a function which returns the concatenated firstName and lastName;

// The this keyword refer to person











const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}


const person1 = {
  firstName: "John",
  lastName: "Doe"
}
const person2 = {
  firstName: 'Jim',
  lastName: "Doe"
}

console.log( person.fullName.call(person1) ); // John Doe

console.log( person.fullName.call(person2) ); // Jim Doe






const obj = { name: "John" };

let greeting = function(a, b) {
  return `${a} ${this.name}. ${b}`;
};


console.log( greeting.apply(obj, ["Hello", "How are you"]) );
// returns: Hello John. How are you?


// Call methods takes arguments as methods and the apply methods take it as an array. When working with array use apply.


console.log( Math.max(1, 2, 3)) // 3


// If you want a maximum the number from the array use apply 

const numbers = [ 1, 2, 3, 4, 5 ];
console.log( Math.max.apply(null, numbers)); // 5







const obj = { name: "John" };

 let greeting = function(a, b) {
   return `${a} ${this.name}. ${b}`
 }

 let bound = greeting.bind(obj); // creating a new function

 console.log( bund("Hello", "How are you?") ); // call the function with the arguments

 // THe bind methods create a new bound function which wraps the original function up