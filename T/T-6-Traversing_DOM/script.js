

let main = document.querySelector('.main')

let c = main.children; // give you number of child inside the nodes
let c2 = main.childNodes; // childNodes will also include text nodes
console.log(c.length) // 2 children h2 ul
console.log(c2.length)// 5 childNodes character return main> <h2> </h2> <ul> </ul> between the closing main tag </main>

let ul = main.children[1];
let h2 = main.firstElementChild;
let ul2 = h2.nextElementSibling;
console.log(ul2); // return ul with list items

let h2a = ul2.previousElementSibling;
console.log(h2a) // Loading Movies





let ul = main.children[1];
let lis = ul.children;
let firstLi = lis[0]; // ul.firstElementChild

var txt = firstLi.textContent;
var txt2 = firstLi.firstChild.nodeValue;
console.log(txt, txt2) // both return the same values


firstLi.firstChild.nodeValue = txt.toUpperCase();
var bool = main.contains( firstLi);// this list item is descended of main




// insertBefore


let ul = document.querySelector('.main ul');
let lis = ul.children;
let AN = lis[5];
let newNode = document.createElement("li");
newNode.textContent = "Ertugrul"

ul.insertBefore(newNode, AN);


let os = document.createElement("li")
os.textContent = 'Osman';
ul.replaceChild(os, lis[5]) // now replace ertugrul to osman


let f = ul.cloneNode(false)
let t = ul.cloneNode(true)

console.log(f) // display ul only
console.log(t) // clone ul and list items