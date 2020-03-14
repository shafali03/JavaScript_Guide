// Promise can be in 3 state 

// Pending
// Resolved
// Rejected

// When the promise is pending the javascript continues code execution the promise or value your waiting on does not cause your program to freeze, either the promise is fulfilled or rejected, JavaScript goes back to that code block to execute the appropriate operations



let myPromise = new Promise( (resolve, reject) => {

// Execute Async code here

  if(true) {
    resolve("SUCCESS!")
  } else {
    reject("FAILURE!")
  }
});


// Create a variable and assign it to new promise, the promise accepts the function with two parameters resolve and reject, within this function we execute our asynchronous operation. for example getting data from another source or downloading a file or any other operation that will take an undetermined  amount of time, after that need to determine whether to resolve or reject the promise, depended on the success or failure of our asynchronous operations.


myPromise
  .then(success => {
    // ..
  })
  .catch(failure => {
    // ..
  });
  
  //Promise is constructed we can execute it, we call the promise to initiate it, then we use the dot then to look for the promise to enter the fulfilled then state dot then accept a function that receives the resolve value from the resolved method.

// We can then do something with the results after that we can use dot catch to look for the promise to enter the rejected state, THe dot catch also accept a function that receives any errors from our rejects method 