
let main = document.querySelector('.main');
let h2 = main.querySelector('h2');
h2.textContent = 'Loading Movies' // textContent changes text in html


let p = main.querySelector('p');
p.innerHTML = 'And now a list of <strong>MOVIES</strong>'


let ul = document.createElement('ul'); // creates a ul element for html
main.appendChild(ul) // main is the parent, when you call appendChild it's always the last child

movies.forEach(function(item){ // item is coming from the array movies
  let li = document.createElement('li') // creates a li element for html
  let txt = document.createTextNode(item); // creates txt which goes inside li item is the string from the movies array
  li.appendChild(txt); // putting txt node inside of list item li
  ul.appendChild(li); // put the li inside of ul

});


// main.removeChild( ul ); // remove the ul