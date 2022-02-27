const posts = [
  { title: "Post One", body: " This is post one" },
  { title: "Post Two", body: " This is post two" },
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((e) => {
      output += `<li>${e.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, rejcet) => {
    setTimeout(() => {
      const err = false;
      posts.push(post);
      if (!err) {
        resolve();
      } else {
        rejcet("we can not set your post");
      }
    }, 1000);
  });
}

//createPost({title:'Post three', bdy:'This is post Three'}).then(getPost).catch((e)=> console.log(e));

// async await

async function inti() {
  await createPost({ title: "Post three", bdy: "This is post Three" })
    .then(getPost)
    .catch((e) => console.log(e));

    getPost();
}


inti(); 

// async await with fetch

async function init2(){
  const url='https://jsonplaceholder.typicode.com/users';
  const data= await fetch(url).then(res=>res.json());
  data.forEach(e=>{
    console.log(e.name);
  })
} 

init2();

// promise.All

// const promise1= Promise.resolve('Hello');
// const promise2=10
// const promise3= new Promise((resolve,rejcet)=>{
//     setTimeout(resolve,1000,'Goodye');
// })

// const url='https://jsonplaceholder.typicode.com/users';

// const promise4= fetch(url).then(res=>res.json());

// Promise.all([promise1,promise2,promise3,promise4]).then((values)=>{
//     console.log(values);
// })
