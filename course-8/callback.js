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

function createPost(post,callback) {
    setTimeout(() => {
        callback();
        posts.push(post);
  }, 2000);
}

createPost({title:'Post three', body:'This is post three'},getPost);
