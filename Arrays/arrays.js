const items = [
  { name: 'Bike',     price: 100  },
  { name: 'Phone',    price: 305  },
  { name: 'Bag',      price: 10   },
  { name: 'Camera',   price: 25   },
  { name: 'clothes',  price: 45   },
  { name: 'computer', price: 1000 },
]

const filteredItem = items.filter((item) => {
  return item.price <= 100
})

console.log(filteredItem)

/*

{ name: 'Bike',     price: 100  },
{ name: 'Bag',      price: 10   },
{ name: 'Camera',   price: 25   },
{ name: 'clothes',  price: 45   },

*/

// Filter method does not change the underlying object that your filtering over





const items = [
  { name: 'Bike',     price: 100  },
  { name: 'Phone',    price: 305  },
  { name: 'Bag',      price: 10   },
  { name: 'Camera',   price: 25   },
  { name: 'clothes',  price: 45   },
  { name: 'computer', price: 1000 },
]

const itemNames = items.map((item) => {
  return item.name
})

console.log(itemNames)

/*

["Bike", "Phone", "Bag", "Camera", "clothes", "computer"]

*/






const items = [
  { name: 'Bike',     price: 100  },
  { name: 'Phone',    price: 305  },
  { name: 'Bag',      price: 10   },
  { name: 'Camera',   price: 25   },
  { name: 'clothes',  price: 45   },
  { name: 'computer', price: 1000 },
]

const foundItem = items.find((item) => {
  return item.name === 'Phone'
})

console.log(foundItem)

// { name: 'Phone',    price: 305  }






const items = [
  { name: 'Bike',     price: 100  },
  { name: 'Phone',    price: 305  },
  { name: 'Bag',      price: 10   },
  { name: 'Camera',   price: 25   },
  { name: 'clothes',  price: 45   },
  { name: 'computer', price: 1000 },
]

items.forEach((item) => {
  console.log(item.name)
})

/*
Bike
Phone
Bag
Camera
clothes
computer
*/






const items = [
  { name: 'Bike',     price: 100  },
  { name: 'Phone',    price: 305  },
  { name: 'Bag',      price: 10   },
  { name: 'Camera',   price: 25   },
  { name: 'clothes',  price: 45   },
  { name: 'computer', price: 1000 },
]

const inexpensiveItem = items.some((item) => {
  return item.price <= 100
})

console.log( inexpensiveItem)

// Check single item return true, if true will return true for the entire array








const items = [
  { name: 'Bike',     price: 100  },
  { name: 'Phone',    price: 305  },
  { name: 'Bag',      price: 10   },
  { name: 'Camera',   price: 25   },
  { name: 'clothes',  price: 45   },
  { name: 'computer', price: 1000 },
]

const inexpensiveItem = items.every((item) => {
  return item.price <= 100
})

console.log( inexpensiveItem)


// Every checks to make sure every single item fall under 100 if not then it will return false









const items = [
  { name: 'Bike',     price: 100  },
  { name: 'Phone',    price: 305  },
  { name: 'Bag',      price: 10   },
  { name: 'Camera',   price: 25   },
  { name: 'clothes',  price: 45   },
  { name: 'computer', price: 1000 },
]


const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal
}, 0)

console.log(total)

// 1435

/*
Reduce add together the price and return the total amount
The reduce item runs the function on every single item in the array
The first method of the function is going to be whatever the 
previous iteration of the array returned
The second item is the actual items in the array and the current total is
going to start on the very first iteration with whatever we pass in as the second parameter 
in our case it's 0, 
first time it run it take the Bike item 100 + 0 return 100 then run second time add the Phone to currentTotal
of 100 which is 405 and so on until we get to the last item

*/




const items = [1, 2, 3, 4, 5]

const includesTwo = items.includes(2)

console.log(includesTwo) // true

// To check if an array has a value without doing a complex find
