// 1
var cat = { sound: "meow", legs: 4};

console.log(cat.sound); // meow
console.log(cat.legs); // 4


var dog = {sound: 'woof', legs: 4 };

console.log(dog.sound); // 'woof
console.log(dog.legs); // 4

dog.sound = "bark";

console.log(dog.sound); // bark





// 2

var sayHello = function() {
  return 'Hello';
}

sayHello(); // Hello


var sayHi = function(){
  return 'sayHi'
}

sayHi(); // sayHi








// 3

var sayHello = function(name) {
  return 'Hello ' + name + '!'
};

sayHello('Fred'); // Hello Fred!







// 4

var sayMeow = function() {
  return "Meow!"
};

sayMeow(); // Meow!


var cat = { legs: 4 };

cat.speak = sayMeow;

cat.speak(); // Meow!







// 5 

var cat = {
  speak: function() {
    return "Meow";
  }
};

cat.speak() // Meow








// 6

var cat = {
  speak: function() {
    return "I have " + this.legs + " legs"
  },
  legs: 4
}

cat.speak(); // I have 4 legs
cat.legs = 5
cat.speak(); // I have 5 legs







// 7

var myCatSpeak = function() {
  return "I have  " + this.legs + " legs"
};

var cat = {
  legs: 4
};


cat.speak = myCatSpeak;
cat.speak(); // I have 4 legs








// 8 

var Cat = function(legs) {
  this.legs = legs
};


var cat = new Cat(4)
cat.speak() // I have 4 legs

var otherCat = new Cat(5);
otherCat.speak(); // I have 5 legs

otherCat.legs = 6;
otherCat.speak(); // I have 6 legs







// 9


function Cat(legs) {
  this.legs = legs
}
Cat.prototype.speak = function() {
  return 'I have ' + this.legs + ' legs!'
};
var cat = new Cat(4);
cat.speak(); // I have 4 legs!



// constructor

class Cat {
  constructor(legs) {
    this.legs = legs;
  }
  speak() {
    return "I have " + this.legs + " legs";
  }
}

var cat = new Cat(4);
cat.speak(); // I have 4 legs!
