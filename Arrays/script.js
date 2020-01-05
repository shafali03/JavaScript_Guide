const comments = [
  { text: 'Love this', id: 523423 },
  { text: 'super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'My favorite food ever', id: 123523 },
  { text: 'Nice NIce Nice', id: 542328 }
];


const isAdult = people.some(function(person) {
  const currentYear = (new Date()).getFullYear();
  if(currentYear -  person.year >= 19) {
    return true;
  }
});

console.log(isAdult);


// refactor
const isAdult = people.some(person => {
  const currentYear = (new Date()).getFullYear();
  return (currentYear - person.year >= 19);
}) 

console.log(isAdult); // true



// super refactor
const isAdult = people.some(person => ((new Date()).getFullYear()) -  person.year >=19 ); 
console.log(isAdult); // true


// array.prototype.every() // is everyone 19?

const allAdult = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log({allAdult});


// find the comment with ID of 823423

const comment = comment.find(function(comment) {
  if (comment.id === 823423) {
    return true
  }
});

console.log(comment)


// refactor one line code
const comment = comment.find(comment => comment.id === 823423);
console.log(comment)




// finding index then deleting 
const index = comments.findIndex(comment => comment.id === 823423);

console.log(index)


comments.splice(index, 1)

// console.table(comments)