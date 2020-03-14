Boolean ? "Yes" : "No"


// if statement example

let randNumber = Math.floor(Math.random() * 10) + 1; // 1-10
let message

if (randNumber % 2 === 0) {
  message = `The number ${randNumber} is even`;
} else {
  message = `The number ${randNumber} is odd`;
}

console.log(message); // The number 4 is even





/////////////////////////
// Ternary Operator


let randNumber = Math.floor(Math.random() * 10) + 1; // 1-10
let message;

randNumber % 2 === 0
  ? message = `The number ${randNumber} is even` // if true
  : message = `The number ${randNumber} is odd`; // else false

console.log(message); // The number 7 is odd




// Refactor

let randNumber = Math.floor(Math.random() * 10) + 1; // 1-10
let message;

message = randNumber % 2 === 0
  ? `The number ${randNumber} is even` // if true
  : `The number ${randNumber} is odd`; // else false

console.log(message); // The number 7 is odd





// Perform multiple operations if condition is true or false

let randNumber = Math.floor(Math,random() * 10) + 1;
let message, emoji;

if (randNumber % 2 === 0) {
  message = `The number ${randNumber} is even `
  emoji = "thump up";
} else {
  message = `The number ${randNumber} is odd `;
  emoji = "thump down"
}

console.log(message)
console.log(emoji)









let randNumber = Math.floor(Math,random() * 10) + 1;
let message, emoji;

randNumber % 2 === 0 
  ? (
      message = `The number ${randNumber} is even `,
      emoji = "thump up"
    )
  : (
      message = `The number ${randNumber} is odd `,
      emoji = "thump down"
    );

console.log(message);
console.log(emoji);






let message, subscribed = document.querySelector(".subscribe");

subscribed.addEventListener("change", () => {
  message = subscribed.checked ? "Thank You" : "Please Subscribe";
  console.log(message)
});


