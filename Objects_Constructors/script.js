const myObject = {
  property: 'Value!',
  otherProperty: 77,
  "obnoxious property": function() {

  }
}

// two ways to get information from object: dot notation


myObject.property // Value

myObject["obnoxious property"] // [Function]




// Object as a Design Pattern

// group things into objects
const playerOneName = 'tim'
const playerTwoName = 'bob'
const playerOneMarker = 'X'
const playerTwoMarker = 'O'




// example two 
const playerOne = {
  name: 'tim',
  marker: 'X'
}


const playerTwo = {
  name: 'bob',
  marker: 'O'
}


function printName(player) {
  console.log(player.name)
}


console.log(playerOneName)
console.log(playerTwoName)



// if you don't know which player to print

function gameOver(winningPlayer){
  console.log('Congratulation!')
  console.log(winningPlayer.name + " is the winner!")
}


// Object Constructors

function Player(name, marker) {
  this.name = name
  this.marker = marker
}


const player = new Player('jenny', 'X')
console.log(player.name) // jenny




// You can add function to objects


function Player(name, marker) {
  this.name = name
  this.marker = marker
}


// Use by calling the function with the keyword new.


const player = new Player('steve', 'X')
console.log(player.name) // steve


// add function to the objects

function Player(name, marker) {
  this.name = name
  this.marker = marker
  this.sayName = function() {
    console.log(name)
  }
}

const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')

player1.sayName() // steve
player2.sayName() // also steve

