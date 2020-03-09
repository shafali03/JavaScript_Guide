const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

const [a, b, ...rest] = alphabet 

const newArray = alphabet.concat(numbers)

// Destructuring works by taking the element you want to structure on and put it on the right side of the equal  like the example above.


console.log(a)

console.log(rest) // D, E, F

function sumAndMultiply(a, b, division = 'No division') {
  return [a+b, a*b]
}

const [sum, multiply] = sumAndMultiply(2, 3)

console.log(sum)
console.log(multiply)
console.log(division)








const personOne = {
  name: 'Kyle',
  age: 24,
  address: {
    city: 'London',
    state: 'One of them'
  }
}

console.log(name)
console.log(age)



const personTwo = {
  name: 'Tim',
  age: 32,
  favoriteFood: 'Mango',
  address: {
    city: 'Somewhere',
    state: 'Another one of them'
  }
}

const { name: firstName = '', age, favoriteFood = 'Rice'} = personTwo










const personThree = {
  name: 'Ali',
  age: 32,
  favoriteFood: 'Rice',
  address: {
    city: 'Somewhere UK',
    state: 'Another one of them'
  }
}


const personFour = {
  age: 32,
  favoriteFood: 'Rice'
}


const personFive = {...personThree, ...personFour}

console.log(personFive)

// Person personFour overrides the personThree, this is a way to combine two objects together









const personSix = {
  name: 'Hasan',
  age: 20,
  favoriteFood: 'Rice',
  address: {
    city: 'Somewhere UK',
    state: 'Another one of them'
  }
}

function printUser( {name, age, favoriteFood = 'Pizza' }) {
  console.log(`Name is: ${name},  Age is ${age}. Food is ${favoriteFood}`)
}

printUser(personSix)


// Name is Hasan, Age is 20. Food is Pizza