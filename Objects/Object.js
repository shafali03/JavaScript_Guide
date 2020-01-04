
// Objects in Javascript


var ourDog = {
  "name": "Camper",
  "legs": 4,
  "trails": 1,
  "friends": ["everything"]
};


var myDog = {
  "name": "Quin",
  "legs": 3,
  "trials": 1,
  "friends" []
}





// Assessing Object Properties with Dot notations


var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};



var hatValue = testObj.hat;
var shirtValue = testObj.shirt;





// Accessing Object Properties with Bracket Notation

var testObj = {
  "an entree": "burger",
  "my side": "veggies",
  "the drink": "water"
};


var entree = testObj["an entree"];
var drinkValue = testObj["the drink"];





// Accessing Object Properties with Variables

var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};


var playerNumber = 16;
var player = testObj[playerNumber];




// Updating Object Properties

var myDog = {
  "name": "Coder",
  "legs": 4,
  "trails": 1,
}

myDog.name = 'Happy Coder'



// Add New Properties to an object

var myDog = {
  "name": "Coder",
  "legs": 4,
  "trails": 1,
}

myDog['bark'] = "woof"



// Delete Properties From an Objects

var myDog = {
  "name": "Coder",
  "legs": 4,
  "trails": 1,
  "bark": "woof"
}

delete myDog.bark



// Testing Object for Properties


var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {


 if (myObj.hasOwnProperty(checkProp)) {
  return myObj[checkProp]
 } else {
   return "Not Found"
 }
}

console.log(checkObj("gift")); // pony
console.log(checkObj("hi")); // Not Found








// Manipulating Complex Object

var myMusic = [

  {
    "artist": "Bill",
    "title":  "Piano man",
    "release": 1973,
    "format": [
      "CD",
      "8T",
      "LP"
    ],
      "gold": true
  },
  // Add new Record here
  {
    "artist": "Beau",
    "title": "Cereal",
    "release_year": 1999,
    "formats": [
      "YouTube video"
    ]
  }
];





// Accessing Nested Objects

var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};


var gloveBoxContents = myStorage.car.inside["glove box"];
// if there a space use bracketNotation

console.log(gloveBoxContents)



// Accessing Nested  Arrays

var myPlant = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birth"
    ]
  }
];


var secondTree = myPlants[1].list[1];