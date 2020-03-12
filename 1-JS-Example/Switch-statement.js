
// Example of Switch

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log(day)

// In our expression, using the getDay method which return the weekday as a number as a number between zero and six, Zero being Sunday,we can now use case to compare the value if  it is 1 the day will equal Monday and so on, at the end of each block there a break, since we do not want our code to run after we have found a match



let text;
switch (new Date().getDay()) {
  case 4: // Thursday
  case 5: // Friday
    text = "It's almost the weekend";
    break;
  case 0: // Saturday
  case 6: // Sunday
    text = "It's the weekend";
    break;
  default: // Use default
    text = "Looking forward to the weekend";
}

console.log(text)
