
// Classes are blueprint to creating objects with a class. Class is a type of function but instead of using the function keyword to initiate it we can use the class keyword.

// The properties are assigned inside a constructor method, the constructor method is required and must have the exact name constructor. In the constructor we are passing the property firstName, then we assign this dot first name  to equal first name. 

class Person {
  constructor(firstName) {
    this.firstName = firstName;
  }
}


// So the person now has a  first name to initiate we declare a variable equal to new person and pass in our argument, now we can log person 1 dot first-name and we get our name 
 

let person1 = new Person("Ali");
console.log( person1.firstName) // Ali





// We can pass multiple arguments to the class by setting multiple properties in our constructor, now with our class we can define other method


class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Here we have get full Name that return the first and last name concatenated

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}





let person1 = new Person("Ali", "Hasan"); 
console.log( person1.firstName ); // Ali
console.log( person1.getFullName() ); // Ali Hasan


// ( person1.firstName ); to get a property we do not use parentheses but when calling a method we do









class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  greeting(x) {
    return `${x}, my name is ${this.firstName} ${this.lastName} and I am ${this.age}`;
  }
}


// the idea behind this is to create multiple instances of a predefined object




let person1 = new Person("Ali", "Hasan", 20);
console.log( person1.getFullName() ); // Ali Hasan
console.log( person1.age ); // 25
console.log( person1.greeting('Hello') );

// Hello, my name is Ali Hasan and I am 20


// Here we have a method called greeting and this accepts an argument to call this we simple use person 1 dot greeting and pass in the arguments. It then has access to the arguments and all other properties of the class




// the idea behind this is to create multiple instances of a predefined object



// We can create another person now this instance contains all of this new persons information


let person2 = new Person("James", "Bond", 100);
console.log( person2.getFullName() );     // James Bond
console.log( person2.age );               // 100
console.log( person2.greeting("Hello") );
// Hello, my name is James Bond and I am 100

