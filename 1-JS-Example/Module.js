
// Modules allow you to break up your code into separate files this allow you to organise and keep the code clean

// Module can export code in several ways and this will affects the way the consumer imports it.




// Module

export default function hello(user) {
  console.log(`Hello , ${user}`);
}

let name = "Ali";

let emoji = "smile";



// One way to export something is setting a default so we can add export default to the beginning of the function   




// consumer 

import hello from "./module.js"

hello("John"); // Hello John



// we also have a consumer which is the is them main JavaScript file that is defined in the HTML file, Here we can import the function like this: export default but this will require either a relative or absolute URL use dot slash or slash before the file name which ever is applicable.

// Now we  use the function in our consumer importing a default export you can name the import whatever you like, You can only have one default export per module, 



export default function hello(user) {
  console.log(`Hello , ${user}`);
}

export let name = "Ali";

export let emoji = "smile";

// We can export more than one thing from the module we just need to add export before it. 


// Our consumer we can import 


import hello, {name, emoji} from "./module.js"

hello(name); // Hello Ali

console.log(emoji) // smile


// The default dos not require curly braces but the other do, We  can also rename these in our consumer by using an alias 


// consumer
import hi, { name as n, emoji as e } from "./module.js"

hi(n); // Hello Ali

console.log(e) // smile

// 


// to make it work in in our browser  need to add 
<script type="module" src="main.js"></script>


// the above tag tells the bowers we care using the browser that this script will be using modules

// The benefits of modules are tree shakable the consumer can import only what they need which result in small bundles and better performance