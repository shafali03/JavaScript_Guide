// let and const are block score

for (let i = 0; i < 5; i ++) {
  console.log(i);
}

console.log(i) // ERROR


// Const value can not be change for example

const animal = "Cat"
console.log(animal)
animal = "dog"; // ERROR



const animals = ["Cat", "dog", "fish"];
  console.log(animal)
animal.push("bird")
  console.log(animals);

  // ["Cat", "dog", "fish"]
  // ["Cat", "dog", "fish", "bird" ]

  // Can modify the content of the array which is not is not changing the reference which is animals




  let animals = ["Cat", "dog", "fish"];
  console.log(animal)
animal.push("bird")
  console.log(animals);

  // Let I can declare a variable and change it later


  for (var i = 0; i < 5; i++) {
    console.log("loop: " + i);
  }

  console.log("After: " + i)

  // Loop: 0
  // Loop: 1
  // Loop: 2
  // Loop: 3
  // Loop: 4

  // After: 5





  function test() {
    for (var i = 0; i < 5; i++) {
      console.log("Loop: " + 1);
    }
  }
  test();
  console.log("After: " + i); // error


  // If we wrap the for loop in a function and call it we will be able to access the variable within the function but not outside of the function









  var name;
  let pet;


  name = "Joe";
  pet = "cat";

  // With Var and Let variable we can declare a variable but not define it

  // With Const we can not do that it must be declared and defined at the same time


  
  var animal = "cat";
  console.log(animal)



  var animal = "dog";
  console.log(animal)

  // cat
  // dog


  // Potential downside with using var it can be declared multiple times, for example if we declared a variable with var multiple times with the same name, if you declare it again it will override the original variable. Let and const do not let you declare the same variable more than once within the same scope.