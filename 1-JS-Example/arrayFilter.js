let numbers = [4, 7, 11, 8, 12, 9];

let filtered = numbers.filter(function(value) {
  return value % 2 === 0
});

// Only interest in value if the value is divisible by 2 with no remainder
console.log(filtered)
// filter even numbers
// [4, 8, 12]


// refactored
let filtered = numbers.filter(value => value % 2 === 0)
console.log(filtered)
// [4, 8, 12]


// refactored
let filtered = numbers.filter(n => !(n % 2));
console.log(filtered)
// [4, 8, 12]



// Common use case filtering objects

const movies = [

  {title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  {title: 'Star Wars: Episode V - The Empire Strikes', year: 1980 },
  {title: 'Star Wars: Episode VI - Return of Jedi', year: 1983 },
  {title: 'Star Wars: Episode I - The Phantom Menace', year: 1999 },
  {title: 'Star Wars: Episode II - Attack of the Clones', year: 2020 },
  {title: 'Star Wars: Episode III - Revenge of the Sith', year: 2005 },
  {title: 'Star Wars: Episode VII - The Force Awaken', year: 2015 },
  {title: 'Star Wars: Episode IX - The Rise of sky walker', year: 2019 }
]

// filter recent movies 

let filtered = movies.filter(el => el.year >= 2015);
console.log(filtered)


// 0: {title: "Star Wars: Episode II - Attack of the Clones", year: 2020}
// 1: {title: "Star Wars: Episode VII - The Force Awaken", year: 2015}
// 2: {title: "Star Wars: Episode IX - The Rise of sky walker", year: 2019}
// length: 3








