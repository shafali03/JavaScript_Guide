let name = "John";

let day = "Friday";

let temp = 70;


const message = 
'Hi' + name + '.\n' +
'I hope you have a great ' + day + "!\n" + 'the current ' + temp + 'degree outside today'

console.log( message );






let name = "John";

let day = "Friday";

let temp = 70;


const message = 
`Hi' ${name}` +
`I hope you have a great ${day} the currently ${temp} degree outside today`

console.log( message );






const language = "JavaScript";

const month = "January"

function tag(strings, ...values) {
  console.log(strings);
  console.log(values);

  return strings[0] + values.join("");
}

tag`#${language}${month}`; 

console 
