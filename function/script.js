
function trueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes it's true"
  }
  return "no it's false"
}



function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes that was true"
  }
  return "False"
}

console.log(trueOrFalse(true));




// Comparison with the Equality Operator

function testStrict(val) {
  if(val === 7) {
    return "Equal"
  }
  return "Not equal"
}


// Change this value to test
testStrict(10) // Not equal









function compareEquality(a, b) {
  if (a == b) {
    return "Equal"
  }
  return "Not Equal"
}

//change this value to test
console.log(compareEquality(10, "10"));





// Greater equal operator

function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over"
    }

  if (val >= 10) {
    return "10 or Over"
  } 

    return "less than 10"
}


// Change this value to test
console.log(testGreaterOrEqual(10)) // 10 or Over







function testGreaterOrEqual(val) {
  if (val <= 12) {
    return "12 or Over"
    }

  if (val <= 24) {
    return "24 or Over"
  } 

    return "More than 24"
}


// Change this value to test
console.log(testGreaterOrEqual(10)) // 10 or Over







// Checking if two things are true at the same time

function testLogicalAnd(val) {

  if (val <= 50 && val >= 25) {
      return "Yes"
  }

  return "No"
}

testLogicalAnd(10)


  




// Checking if value is not between 10 and 20


function testingLogicalOr(val) {

  if (val < 10 || val > 20) {
    return "Outside"
  }

  return "inside"
}

testLogicalAnd(15)




// else statement

function testElse(val) {
  var result = " ";


  if (val > 5) {
    result = "Bigger than 5"
  } else {
    result = "5 or smaller"
  }

  return result;
}


// else if statement

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5"
  } else {
    return "Between 5 to 10"
  }
}

testElseIf(7);



// Logic Order in if Else Statement
// order

function testElseIf(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10"
  } else {
    return "Greater than or equal to 10"
  }
}


// Chaining If Else Statement

function testSize() {
  if (num < 5) {
    return "tiny"
  } else if (num < 10) {
    return "small"
  } else if (num < 15) {
    return "medium"
  } else if (num < 20) {
    return "Large"
  } else {
    return "Hugh"
  }
}


console.log(testSize(7));







// if statement win


var prizes = ["Car", "Bike", "Horse", "Holiday", "TV", "House", "Go Home"]

function golfScore(par, strokes) {

  if (strokes == 1) {
    return prizes[0]
  } else if (strokes <= par - 2) {
    return prizes[1]
  } else if (strokes == par - 1) {
    return prizes[2]
  } else if (strokes == par) {
    return prizes[3]
  } else if (strokes == par + 1) {
    return prizes[4]
  } else if (strokes == par + 2) {
    return prizes[5]
  } else if (strokes >= par + 3) {
    return prizes[6]
  }
}

console.log(golfScore(5,2))




// Switch statement

function caseInSwitch(val) {
var answer = "";
switch(val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
  }

  return answer;
}

console.log(caseInSwitch(1));






// Default Option in Switch Statements

function switchOfStuff(val) {
  var answer = "";
  switch(val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff"
      break;
    }
  
    return answer;
  }
  
  console.log(switchOfStuff("a"));
  







  // Multiple Identical Option in switch statement

  function sequentialSizes(val) {
    var answer = "";
    switch(val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        break;
    }
    return answer;
  }

console.log(sequentialSizes(1))







// Replacing if Else Chains with Switch

function chainToSwitch(val) {
  var answer = "";

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "The answer 1"
  } else if (val === 99) {
    answer = "Missed me by this much";
  } else if (val === 7) {
    answer = "Ate Nine"
  }

  return answer;
}


// changed to switch
function chainToSwitch(val) {
  var answer = "";


  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1: 
      answer = "The answer 1"
      break;
    case 99:
      answer = "Missed me by this much";
      break;
    case 7:
      answer = "Ate nine"
      break;
  }

}









// Returning Boolean Values from Functions

function isLess(a, b) {

  if (a < b) {
    return true;
  } else {
    return false;
  }
}

isLess(10, 15);



// Short hand for returning 

function isLess(a, b) {

  return a < b
}

isLess(10, 15);






// returning early pattern from functions

function abTest(a, b) {

  if (a < 0 || b < 0) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 2)); // 8







// Counting cards

var count = 0;

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break
  }

  var holdbet = "Hold"
  if (count > 0) {
    holdbet = "Bet"
  }

  return count + " " + holdbet;
  // return "Change Me";
}


cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(4))