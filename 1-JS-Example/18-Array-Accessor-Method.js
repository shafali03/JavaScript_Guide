// Concat methods joins two or more arrays

const arr1 = [1, 2]
const arr2 = [3, 4]
const arr3 = [5, 6]

const newArr = arr1.concat(arr2, arr3);

console.log(arr1)         [1, 2]
console.log(arr2)         [3, 4]
console.log(arr3)         [5, 6]
console.log(newArr)       [1, 2, 3, 4, 5, 6]


// Filter methods create an array filled with all array elements
 
const arr = [ 4, 8, 12, 5, 9, 11, 24];

const filtered = arr.filter( num => num > 5 );

console.log(arr)       [ 4, 8, 12, 5, 9, 11, 24 ]
console.log(filtered)  [ 4, 8, 12, 9, 11, 24 ]

