// Javascript array mutator methods modify the original array.

const arr = ['cat', 'fish', 'bird']

console.log( arr.push('horse'))// 5

console.log(arr); // ['cat', 'fish', 'bird', 'horse]







// The pop method removes the last time from the array

console.log(arr.pop())





// The shift method remove the first element from the array

console.log(arr.shift());



// The unshift methods adds elements to the front of the array

console.log( arr.unshift("cat"))




// The splice methods adds or removes element from the array the first parameter defines the position where and where the element should be added or removed, the second element the deleteCount defines how many items need to be removed, all other elements are the new element to be added 


// Array.splice(start, deleteCount, item1, item2, ...)


const arr = ['cat', 'dog', 'robot', 'horse']
// 'cat', 'dog', 'robot', 'horse']

console.log(arr.splice(1, 2, "Camel", 'tiger'))
// ["dog", "robot"]

console.log(arr)
// ["cat", "Camel", "tiger", "horse"]



// sort methods
// Sort methods sorts the elements of an array in place and return the array, this method sorts by character order.

const arr = ["banana", "orange", "apple", "watermelon"]

arr.sort();
console.log( arr );
    [ "apple", "banana", "orange", "watermelon"]


// to sort number in array 

const arr = [20, 100, 33, 210, 5, 2, 3, 50]

arr.sort(function(a, b) {return a - b});

console.log(arr)
// (8) [2, 3, 5, 20, 33, 50, 100, 210]




// The reverse method simply reverse the order of the element in an array

const arr = ["banana", "orange", "apple", "watermelon"]

arr.sort().reverse();
console.log(arr);

//  ["watermelon", "orange", "banana", "apple"]




// The copy methods copies a sequence of array element to another location in the same array
arr.copyWithin(target, start, end)


const arr = ['A', 'B', 'C', 'D']

arr.copyWithin(1);
console.log(arr)
// ["A", "A", "B", "C"]

// The above example targets index 1 and start in implied to be 0 and the and the end is implied to be the entire length of the array. So we are copy all the of the items into array starting at index 1 and replacing whatever was in the array


const arr = ['W', 'X', 'Y', 'Z']

arr.copyWithin(1, 3)
console.log(arr)

// ["W", "Z", "Y", "Z"]



// Fill methods

// Fill method changes the element in array to a static value from a start index to an end index then it return the modified array negative

arr.fill(value, start, end)

// negative numbers start counting from the end of the array


const arr = ['car', 'bike', 'bus', 'train']

arr.fill('car');
console.log(arr)

// ["car", "car", "car", "car"]