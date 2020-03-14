
// In JavaScript there are several method that can be used to convert object into arrays

// {...}  ->  [...]

// What makes the object iterable interval means to loops through with an array

// In array we have many methods which are not available to object

// forEach()
// filter()
// .map()
// ,reduce




// Object.keys()

// Here our objects 

const obj = {
  homePet: 'Cat',
  safariPet: 'Lion',
  farmPet: 'Horse'
}

// To get all the keys you can use object keys and pass in the object what you want to convert this will return an array
console.log( Object.keys(obj) );


// returned an array
/* returns */ ["homePet", "safariPet", "farmPet"]


// To get all the values then we can use object values and pass in the object that we want to convert

console.log( Object.values(obj) );

// This will return an array with all the values


/* returns */ ["Cat", "Lion", "Horse"]


// To get the keys and vales

console.log( Object.entries(obj) );

/* returns */  
[
  [ 'homePet', 'Cat' ],
  [ 'safariPet', 'Lion' ],
  [ 'farmPet', 'Horse' ]
]

// Use object entries and pass in the object that we want to convert, this will return a multi-dimensional array with both keys and values