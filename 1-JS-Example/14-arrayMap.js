// Map method creates a new array from the results of the function call each element of another array and it does not modified the original array

const people = [
  {
    firstName: 'John',
    lastName: 'Doe'
  },
  {
    firstName: 'John',
    lastName: 'Doe'
  }
]

const names = [];

for(person of people) {
  names.push(`${person.firstName} ${person.lastName}`);
}

console.log(names); // ['John Doe', 'John Doe' ]

// imperative statements Mutate state





// Map

// declarative functions Describe State


const people = [
  {
    firstName: 'John',
    lastName: 'Doe'
  },
  {
    firstName: 'John',
    lastName: 'Doe'
  }
]


const names = people.map(function(currentEl, index, arr) {
  return `${person.firstName} ${person.lastName}`
});

console.log(names)



// arrow function

const names = people.map( person => `${person.firstName} ${person.lastName}`);
console.log(names)


