
// Object call post

const posts = {
  'id': 1,
  'title': 'Post Title',
  'body' : 'Post Body',
}

// In the object we have property type id, title, body and next to them we have value 1, 'Post Title', 'Post Body'

// for in 

for (variable in object) {

}


// For our object example

for (let post in posts) {
  console.log(post)
// id, title, body (post)
// 1, Post title, Post Body (posts[post])
}




const numbers = [1, 3, 5, 7, 9];

for (let number in numbers) {
  console.log( numbers[number] ); // 1, 3, 5, 7, 9
}


// For of loop syntax

for (variable of iterable) {

}

// for of will not work with objects they are not iterable

// For in = objects

// For of = Arrays