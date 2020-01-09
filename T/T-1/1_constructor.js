// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year

  this.getSummary = function() {
    return `${this.title} was written by ${this.author}`
  }
}

// Instantiate an Object // Runs constructor function
// then pass
const book1 = new Book('Book One', 'Jame Smith', '1990');
const book2 = new Book('Book Two', 'James Smith', '2000');

console.log(book1.getSummary())