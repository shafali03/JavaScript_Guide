// const posts = [
//   { title: 'Post One', body: 'This is post one' },
//   { title: 'Post Two', body: 'This is post two '}
// ];

function getPost() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if(!error) {
        resolve();
      } else {
        reject('Error: Something went wrong')
      }
    }, 2000);
  });  
}


// Async Awaits

// async function init() {
//   await createPost({ title: 'Post Three', body: 'This is post three' });

// getPost();
// }

// init();


// Waiting for async function to run and create post then the getPost will execute


// Async / Awaits / Fetch
async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();

  console.log(data)
}

fetchUsers();