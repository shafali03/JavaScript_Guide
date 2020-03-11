for (let i = 1; i < 3; i++) {
  console.log('Green: ' + i);
}

// Green: 1
// Green: 2




for (let i = 3; i > 0; i--) {
  console.log('Red: ' + i);
}

// Green: 3
// Green: 2
// Green: 1



for(let i = 1; i < 5; i++) {
  console.log('Yellow: ' + i)
  if (i === 3) break
}

// Yellow: 1
// Yellow: 2
// Yellow: 3




///////////////////////
// ARRAYS


const names = ['John', 'Bob', 'Mary', 'Joe'];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// John
// Bob
// Mary
// Joe




for(name of names) {
  console.log(name)
}

// John
// Bob
// Mary
// Joe




////////////////////
// loop over objects

const user = {'firstName': 'John', 'lastName': 'Doe'}

for (key in user) {
  console.log(user[key])
}


// John
// Doe





let i = 1;
while(i < 7) {
  console.log(i);
  i++;
  if( i === 5) break
}

// 1
// 2
// 3
// 4  break






let a = 0;
do {
  a++;
  if (a === 2) continue;
  console.log(a)
} while (a < 3)

// 1
// 2 is missing because of continue
// 3


const animals = ['cat', 'dog', 'horse', 'sheep', 'bird'];

animals.forEach(animal => {
  console.log(animal)
});

// cat
// dog
// horse
// sheep
// bird