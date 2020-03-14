let normalFunction = function() {

}



let arrowFunction = () => {

}




// Normal name function

function message() {
  return "Hello World"
}

let message = () => {
  return "Hello World"
};



let message = () =>  "Hello World";



// Before the arrow function add parameter
let message = (name) => `Hello ${name}`;
console.log(message("John")); // Hello John








// Anonymous function

const people = [
  {
    firstName: 'John',
    lastName: 'Doe'
  },
  {
    firstName: "Mary",
    lastName: "Doe"
  }

]

console.log(
  people.map(function(person) {
    return person.firstName;
  })
);

// We need to be careful with arrow function and regular function rebind this to the object that called it




let demo = function() {
  console.log(this)
};

window.addEventListener("load", demo);

document.querySelector(".btn").addEventListener("click", demo) // button

// When this load this is bund to the window but when the button is clicked, this is bound to the button object

// Arrow function do not rebind to this, this remain bound to the context it was called, in this example it the window object
