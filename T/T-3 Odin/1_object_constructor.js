// Object Constructor

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker
// }

// you use by calling the function with the keyword new

// const player = new Player('steve', 'X')
// console.log(player.name) // steve



// Using the object literal method you can add function to the object

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(name)
  }
}


const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')
const player3 = new Player('tim', 'X')
const player4 = new Player('John', 'O')
player1.sayName() // 'steve'
player2.sayName() // 'also steve'
player3.sayName()
player4.sayName()


// book

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    console.log(title, author, pages, read)
  }
}

const book1 = new Book('The hobbit', 'by J.R.R Tolkien', '295 pages', 'not read yet')
const book2 = new Book('The Tom', 'by James Smith', '95 pages', 'not read yet')
const book3 = new Book('The Jerry', 'by Dan Hopkins', '29 pages', 'not read yet')
const book4 = new Book('The News', 'by BBC', '1095 pages', 'not read yet')
book1.info()
book2.info()
book3.info()
book4.info()


