
// JavaScript set timeout and set interval are used to time execution of code a a specif  intervals the setTimeout method calls a function after a specified number of milliseconds, additional parameters can also be passed inside the function

setTimeout(function, milliseconds, param1, param2, ...)


setTimeout(() => {
  console.log( "Hi everyone");
}, 3000);

// Her we can use the arrow function to console.log "Hi everyone " after 3,000 milliseconds or three seconds,



setTimeout(greeting, 3000);

function greeting() {
  console.log( "Hello" );
}

// Alternatively we can write like above calling a function defined below after three seconds







// We can also provide parameters to the function can than use arguments during execution ( x )

setTimeout(greeting, 3000, "Hi");

function greeting(x) {
  console.log( x );
}

// returns after 3 seconds: Hi






// We can also choose to cancel the set timeout before it is called, Here we are determining if something is true and if so we going to clear the timeout, we must assign the timeout to a variable so that we we have something to reference in our clear timeout and now the function will not run at at all

const timeout = setTimeout(greeting, 3000, "Hi");

if(true) {
  clearTimeout(timeout);
}

// will not run
function greeting(x) {
  console.log( x );
}




// SetInterval

setInterval(function, milliseconds, param1, param2, ...)


// The setInterval is similar but it will run continually until it is either cleared or the window is closed, it too can accept additional parameters to be passed to the function



setInterval(() => {
  console.log( "Hello" );
}, 3000);
// return every 3 seconds Hello









// Here we have set  the counter variable to zero, then we have set our setInterval and it will call the function count every second. The counter will log the counter and log the counter and increment it by 1, this will run every second indefinitely

let counter = 0;

setInterval(count, 1000);

function count() {
    console.log( counter++ );
  }

  // return counters every seconds 0, 1, 2, 3, 4 ...











  // if we want to stop it at some point we need to assign the set interval to a variable then in the function we can evaluate the counter if it is larger than  5 we will clear interval on count interval variable




let counter = 0 

const counterInterval = setInterval(count, 1000);

function count() {
  console.log( counter++ );

  if(counter > 5) {
    clearInterval(counterInterval)
  }
}

// return every second : 0, 1, 2, 3, 4, 5

