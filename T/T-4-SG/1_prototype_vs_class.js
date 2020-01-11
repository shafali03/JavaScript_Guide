

// Creating objects with class

let PersonC = class {
  constructor(nm, id) {
    this.name = nm;
    this.id = id;
  } 
  // method
  getDetails() {
    return `${this.name} :: ${this.id}`;
  }
};
let bob = new PersonC("Bob", "123")
console.log(bob.getDetails() bob.name);


// Employee extends PersonC creates a connection between two of them, everything inside of PersonC is av available to Employee
let EmployeeC = class extends PersonC { // Employee prototype links to PersonC prototype
  constructor(nm, id, salary) {
    super(nm, id);
    this.salary = salary
  }
  employeeInfo() { // exist on the prototype of employeeC
    return `${this.name} :: ${this.id} :: ${this.salary}`;
  }
};

// creating new instance of employee we putting inside of noomi variable
let noomi = new EmployeeC("Noomi", 456, 850000);
console.log(noomi.employeeInfo());



// When you create a object that object automatically gets a prototype. If there a property or method  that not in the Javascript object will go to the prototype and check if it exist




////////////////////////////////////////////////////////////////////////
// All the code below is the same as the above code 



// same as a constructor above
let PersonP = function(nm, id) {
  this.nm = nm;
  this.id = nm;

}

// same as the method in the constructor function
PersonP.prototype.getDetails = function(){
  return `${this.name} :: ${this.id}`;
}


// all the keyword this refer to fred variable
// Calling the above function on line 45 and passing 
// when you add new it's means call PersonP function as a constructor
// It's going to return a instance of PersonP object and give it back to me to fred 
let fred = new PersonP('Fred', 321);
console.log(fred.getDetails(), fred.name)



// same as the constructor function EmployeeC
let EmployeeP = function(nm ,id, salary) {
  PersonP.call(this, nm, id) // this refer to the EmployeeP
  this.salary = salary
}

// extends             objects         prototype 
Object.setPrototypeOf(EmployeeP, PersonP.prototype) // extends
EmployeeP.prototype.employeeInfo = function() {
  return `${this.name} :: ${this.id} :: ${this.salary}`;
}

let mary = new EmployeeP("Mary", 456, 454566);
console.log(mary.employeeInfo());
