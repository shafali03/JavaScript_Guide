const basket = ['apple', 'oranges', 'grapes'];
// 1
for (let i = 0; i < basket.length;) {
  console.log(basket[i])
}
// apple
// orange
// grape




// 2
basket.forEach(item => {
  console.log(item);
})
// apple
// orange
// grape



// 3 for of
// iterating over arrays, string
for (item of basket) {
  console.log(item)
}
// apple
// orange
// grape


const detailedBasket = {
  apples: 5,
  orange: 10,
  grapes: 1000
}


// 4 for in loops over object and see properties
// enumerating
for (item in detailedBasket) {
  console.log(item)
}

// apples
// oranges
// grapes








// Call stack first in last out



// Recursion

function foo() {
  foo()
}

foo()