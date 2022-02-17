window.addEventListener("DOMContentLoaded", (event) => {
  const list = document.querySelector("ul");
  const forms = document.forms;

  // deleting movie
  list.addEventListener("click", (e) => {
    if (e.target.className === "delete-span") {
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });

  // add movie
  
  const addForm = forms["add-movie"];

  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  const button=addForm.querySelector('button');
  button.addEventListener('click',(e)=>{
      const value=addForm.querySelector('input[type="text"]').value;
      const li=document.createElement('li');
      const title_span=document.createElement('span');
      const delete_span=document.createElement('span');
    
     title_span.setAttribute('class','title-span');
      delete_span.setAttribute('class','delete-span');

     // title_span.classList.add('title-span');  or like that
    
      title_span.textContent=value;
      delete_span.textContent='delete';
    
      li.appendChild(title_span);
      li.appendChild(delete_span);
      list.appendChild(li);
  })

});
