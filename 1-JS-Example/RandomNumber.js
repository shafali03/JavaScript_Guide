
// Generate a random number
Math.random(); // 0.34654564

let randomNum = Math.floor(Math.random() * 10 + 1);

console.log(randomNum)

// prints a random number between 1 and 10





const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;

};

console.log(randomNumber(5, 15));