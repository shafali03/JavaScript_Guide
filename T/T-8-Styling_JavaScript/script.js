

let main = document.querySelector("main");
let ul = main.querySelector("ul")
let hi = document.querySelector("header hi")
let footer = document.querySelector("#foot p")


main.classList = "some abc";
main.id = "main";
main.title = "mouseover text"


foot.style.backgroundColor = "pink"
foot.style.cssTest = "font-family: sans-serif;  letter-spacing:5px;";


footer.classList.add("some")
footer.classList.remove("other")
footer.classList.toggle("toggle")


// default styles 

let style = window.getComputedStyle(ul)
console.log( style.length)
console.log( style.item(200))
console.log( style.getPropertyValue('color') );