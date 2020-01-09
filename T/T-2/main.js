
// Single element
const form = document.getElementById('my-form');
console.log(form)

console.log(document.querySelector('h1'))

// Multiple element 
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('.item'));


const items = document.querySelectorAll('.item')

//looping through list items
items.forEach((item) => console.log(item));



const ul = document.querySelector('.items');

// removes all items
// ul.remove(); 


// To remove the last item
// ul.lastElementChild.remove();


// To get first item and change text
ul.firstElementChild.textContent = 'Hello'

// To select second item
ul.children[1].innerText = 'Shaf'

// To add html to item
ul.lastElementChild.innerHTML = '<h1>Hi</h1>'




// Selecting button
const btn = document.querySelector('.btn');
btn.style.background = 'red';

// Events ====================================================
const btns = document.querySelector('.btn');

btns.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Code everyday</h1>'



  // console.log('click')
  // console.log(e.target)
  // console.log(e.target.className)

});




