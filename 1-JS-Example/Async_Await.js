
// A Async Await is just a syntactic sugar wrap around promises which makes it easier to work with.


// fetch 

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => console.log(json))

// Without async await we use dot then to wait on the data to be returned this is fine with simple request but when you are dealing with multiple promises it can get a bit confusing as to when each line will get executed








// Async await

async function getTodo() {
  const response = await fetch("https://jsonplaceholder.tyicode.com/todos");
  const json = await response.json()
  console.log(json);
}

getTodo();

// With async await you can write code that looks like synchronous but is actually asynchronous
// The first find you need to do is to wrap our asynchronous code in a function and we add the asynchronous code in a function and we add the async keyword before the function.

// In the function we can create a response constant and and use the await keyword before our promise which in this case is the fetch("https://jsonplaceholder.tyicode.com/todos");

// On the next line const json = await response.json()
// We are awaiting for our response JSON and the the last line we are logging the JSON data this will wait for the previous line to complete and then after the function we call it.

// You can't you the await keyword without the async keyword attached to the function they only work together the function it's self can be a standard 






// Standards function
async function getTodo() {
  const response = await fetch("https://jsonplaceholder.tyicode.com/todos");
  const json = await response.json()
  console.log(json);
}



// Arrow function
const getTodo = async() => {
  const response = await fetch("https://jsonplaceholder.tyicode.com/todos");
  const json = await response.json()
  console.log(json);
}


// Anonymous function


// Arrow function
( async () => {
  const response = await fetch("https://jsonplaceholder.tyicode.com/todos");
  const json = await response.json()
  console.log(json);
})();

