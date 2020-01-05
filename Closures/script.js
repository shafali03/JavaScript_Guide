// 1 

function makeCounter() {
  var n = 0;
  return function() {
    n = n + 1;
    return n;
  }
}

var counter = makeCounter();
console.log(counter()) // 1
console.log(counter()) // 2
console.log(counter()) // 3






// 2

function counter(firstN) {
  var n = firstN;
  return function() {
    n = n + 1;
    return n;
  }
}

var counterA = counter(5);
console.log(counterA())
console.log(counterA())
console.log(counterA())




// 3 

function SecretDiary() {
  var locked = true,
      contents = "Hey!"

  function unlock() {
    locked = false;
  }

  function lock() {
    locked = true;
  }

  function read() {
    if (locked) { return "Nope!" }
    return contents;
  }

  function write(message) {
    if (locked) { return "Nope!" }
    contents = message;
  }

  return {
    unlock: unlock,
    lock: lock,
    read: read,
    write: write 
  };
}

var secretDiary = SecretDiary();
console.log(secretDiary.read());
secretDiary.unlock();
console.log(secretDiary.read());










// Closures 

const myName = 'Shaf'

function printName() {
  console.log(myName)
}
printName() // Shaf

// Accessing a variable outside of the function,   




// common closures 

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log('Outer Variables ' + outerVariable)
    console.log('Inner Variables ' + innerVariable)
  }
}

const newFunction = outerFunction('outside')
newFunction('inside')