
let main = document.querySelector('.main');
let li = main.querySelector("ul li");


// setAttribute can create and change them
main.setAttribute("title", "my movies");
console.log(main.getAttribute("title"));


console.log(li.getAttribute("data-year")); // 1994 


li.dataset.year = 1998;
console.log(li.dataset.year) // changes the value to 1998