// Basic syntax
fetch(url, { options} )


// first paramter is the url which will provide the data and the second paramter is an object containing options.



fetch("https://jsonplaceholder.tyicode.com/todos")
  .then(response => response.json())
  .then(json => console.log(json))

  
  // Retrieving at list of to do task and fetch is promise based. Use dot then to get our response, the response contains our headers and data in order to receive the data, need to convert the data into JSON so we return response.json(), Once this is returned it will move into the next dot then. Now we can do something with the JSON data this example will return 200 to do task


  // console.log output

  // JSON
  {
    id: 1,
    title: "Need Todo",
    complete: true,
    userId: 1

  }






// Another example

fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify({
    title: "New Todo",
    completed: false,
    userId: 2
  }),
  headers: {
    "Content-type": "application/json"
  }
})
.then(response => response.json())
.then(json => console.log(json))

// Console Output

// JSON
{
  id: 201,
  title: "New Todo",
  completed: false,
  userId: 2
}




// After the url will include first option method: "POST", next will include the data we want to send in the body, the body need to be wraps in json stringify  and also need to include headers option with our content type set to application json. Then we have our first dot then that receives the response and processes the json. The second dot then can do something with the response data, In the above instance we receive the data in the console along the id: 201