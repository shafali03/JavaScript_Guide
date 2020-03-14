const arr = ['train', 'car', 'robot', 'bike']

for( i = 0; i < arr.length; i ++) {
  console.log(arr[i]);
}




// ForEach

const arr = ['train', 'car', 'robot', 'bike'];

arr.forEach( function(value, index) {
  console.log( value,  index)
});

// train
// car
// robot
// bike

// Include the function with the arguments we needs and then log the values, we can get rid of the index and make it one line code


arr.forEach( value => console.log( value ));

