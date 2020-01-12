// Linking prototype objects to build a prototype chain


// 1. obj --> otherProto.prototype --> Object.prototype --> null

let otherProto = function() {
  this.prop1 = 456; // this means instance of the object we are creating
  this.inner = function() {
    console.log("inner ,methods o instance");
  };
  //automatically returns the instance of the object
};

otherProto.prototype.someMethod = function() {
  console.log("this is otherProto")
};

let obj = new otherProto(); // It runs the constructor function and build an object function
console.log(obj.pro1); // 456
obj.inner(); // inner ,methods o instance
obj.someMethod(); // this is otherProto
obj.toString();




// 2. 
let protoObj = {
  property1: 456,
  someMethod: function() {
    console.log('this is some method')
  }
} // let protoObj = new Object(); protoObj.prop1 = 456; protoObj.someMethod = function(){}

protoObj._proto_.otherMethod = function() {
  console.log.prototype('this is otherMethod')
}


// 3.
let childObj = {};
Object.setPrototypeOf(childObj, protoObj); // protoObj to extend to childObj
console.log(childObj.prop1);
childObj.someMethod();
childObj.otherMethod();


// 4. newer method
// childObj2 --> protoObj --> Object.prototype --> null
let childObj2 = object.create(protoObj);
console.log(childObj2.property1); // 456 coming from protoObj
childObj2.property1 = 777; // created a new property inside childObj2 called prop
console.log(childObj2.prop1, childObj2._proto_.property1);
childObj2.someMethod(); // calls the one inside protoObj
childObj2.someMethod() = function() {
  console.log('new method inside childObj2')
};
childObj2.someMethod();
childObj2._proto_.someMethod();