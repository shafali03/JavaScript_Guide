// let, const have a block level scope

let age = 30;
age = 35;

console.log(age);

// initializes
let score;

score = 5;
console.log(score)


// syntax error 
// const scores;

// score = 5;
// console.log(score)



// Data types

// String,
const name = 'Ali';

// Number
const myAge = 20;

const rating = 4.5;

// Boolean
const isCool = true; // false

// Null

const x = null;

// Undefined
let z;


// you can test to see what type it is
console.log(typeof name); // string
console.log(typeof age) // number
console.log(typeof isCool) // boolean





// Concatenation
console.log('My name is ' + name + ' and I am ' + age);


// Temple literal
console.log(`My name is ${name} and I am ${age}`)





const s = 'Hello World';
console.log(s.substring(0, 5).toUpperCase())


// split arrays into 12 values for Hello World
console.log(s.split(''));



const a = 'apple, google, yahoo'

console.log(a.split(', '));
// "apple", "google", "yahoo"




// Arrays - variables that hold multiple values

const numbers = new Array(1,2,3,4,5);

console.log(numbers);
// [1, 2, 3, 4, 5]




const fruits = ['apple', 'orange', 'pear'];

fruits.push('mango') // add to the array

fruits.unshift('banana') // add item to the beginning

console.log(fruits[1]); // oranges

console.log(Array.isArray('fruits'))// checks if it's an array

fruits.pop(); // takes off last item in array

console.log(fruits.indexOf('pear'))





// Objects Literals


const person = {
  firstName: 'Ali',
  lastName: 'Hasan',
  age: 25,
  hobbies: ['football', 'coding'],
  address: {
    street: '12 London St',
    city: 'London'
  }
}

console.log(person);

console.log(person.firstName); // access single items

console.log(person.hobbies[1]) // coding


// Destructuring
// create variable

const { firstName, lastName, address: {city}} = person
console.log(firstName) // Ali
console.log(city) // London



// Add property to person objects

person.email = 'ali@gmail.com'
console.log(person)



// Arrays

const todo = [
  {
    id: 1,
    text: 'buy a new laptop',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Visit Doctors',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Visit Pharmacy',
    isCompleted: false
  },
];


console.log(todo[1].text);



// to send data to a server

const todoJSON = JSON.stringify(todo);
console.log(todoJSON)



// Loops

// for
for(let i = 0; i < 5; i++) {
  console.log(`for loop number ${i}`)
}


// while
let i = 0;
while(i < 5) {
  console.log(`While loop Number: ${i}`);
  i++;
}

// loop through todo print text
for(let i = 0; i < todo.length; i++) {
  console.log(todo[i].text);
}


// for of loop
// t can be anything but todo is name of todo array
for(let t of todo) {
  console.log(todo.text);
}


// recommended iteration with array
// forEach loop through array
todo.forEach(function(t) {
 console.log(t.text)
})

//map will create a new array from array
const todoText = todo.map(function() {
  return todo.text
});

// filter will allow to us to create a new array based on the condition
const todoCompleted = todo.filter(function(todoToComplete){
  return todoToComplete.isCompleted === true;
});

console.log(todoCompleted)


// if you only want to return text from todo

const todoComplete = todo.filter(function(todoText) {
  return todoText.isCompleted === true;
}).map(function(todo) {
  return todo.text;
})

console.log(todoComplete)



// conditional statement

let b = 4;

if(b === 10) {
  console.log('b is 10')
} else if(b > 10) {
  console.log('b is greater than 10')
} else {
  console.log('b is less than 10')
}


// Ternary operator 
// ? represent than
// : represent else
// red represent condition true
// blue represent condition false

const c = 11
const color = c > 10 ? 'red' : 'blue'

console.log(color);




// function

function addNum(a, b) {
  return (a + b)
}
console.log(addNum(3, 5));


// arrow function

const addMe = (a, b) => {
  return a + b
}
console.log(addMe(5, 7))


// arrow function one line

const addOne = (a, b) => a + b;

console.log(addOne(1, 1));


todo.forEach((todos) => console.log(todos))






// OOP   =============================================================

// Constructor function
function PersonOne(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

// Instantiate object

const person1 = new PersonOne('Tim', 'Dean', '1-31-1950');
const person2 = new PersonOne('Dan', 'Smith', '3-6-1970')

console.log(person1.dob)



// OOP need to use prototype  =============================================================



// Constructor function
function PersonTwo(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function() {
    return this.dob.getFullYear()
  }
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
  }
}

// Instantiate object
const person3 = new PersonTwo('Tim', 'Dean', '1-31-1950');
const person4 = new PersonTwo('Dan', 'Smith', '3-6-1970')

console.log(person3.getBirthYear());
console.log(person4.getFullName())



// OOP prototype  =============================================================


// Constructor function use prototype
function PersonThree(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

 //prototype
 PersonThree.prototype.getBirthYear = function() {
  return this.dob.getFullYear()
 }

 PersonThree.prototype.getFullName = function() {
   return `${this.firstName} ${this.lastName}`
 }


// Instantiate object
const person5 = new PersonThree('Tim', 'Dean', '1-31-1950');
const person6 = new PersonThree('Dan', 'Smith', '3-6-1970')

console.log(person5.getBirthYear());
console.log(person6.getFullName())




// OOP Class =============================================================

class PersonFour {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob)
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}


// Instantiate object
const person7 = new PersonFour('Ali', 'Hasan', '1-1-1980')
const person8 = new PersonFour('Hammaad', 'Hasan', '7-7-1948')

console.log(person7.getBirthYear())
console.log(person8.getFullName())



// OOP Class =============================================================