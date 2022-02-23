//importing modules
import user from './user.js';    // we can change the name with defalut exprot like: iimport u from "./user.js"
import {yas,printName as isim} from './user.js'  // we can't change name with export import {yas ,isim} from './user.js'    


const instance =new user("kevin",35);
console.log(instance);
yas(instance);
isim(instance);

// objecct priavcy and getter, setter
let person={
    _firstname:'John',
    _lastname:'Doe',
    _age:35,
    get getFullName(){
        if(this._firstname && this._lastname){
            console.log("fullname:" + this._firstname +" "+ this._lastname);
        }
        else{
            console.log("Oops!! something wrong");
        }
    },
    set setAge(newAge){
        if(typeof this._age==='number'){
            this._age=newAge;
            console.log("new age is:"+this._age);
        }
        else{
            console.log("Oops!! something wrong");
        }
    }

}

person.getFullName; // should be return "John Doe"

person.setAge=66;  // return new age is 66


// factory functions

let robot=(model,mobile)=>{
    return{
        model:model,
        mobile:mobile,
        functionality:{
            beep(){
                console.log('beep beep');
            },
            boop(){
                console.log('boop boop');
            },
        }
    }
}

let myrobot=robot('Alfa-5',false);

console.log(myrobot.model);
console.log(myrobot.mobile);
//myrobot.makeSound();


// destructured assigment


const {functionality}=robot;
// functionality.beep(); //  retrun beep beep

const inventory={
    sunglass:1450,
    bags:1055,
    shirts:5000
}

const exec=(resolve,reject)=>{
    if(inventory.shirts>0){
        resolve(" I we have enhough shirts our inventory");
    }else{
        reject('we sold out all shirts')
    }
}


const orderShirts=()=>{
    return new Promise(exec);
}

const orderPromise=orderShirts();

console.log(orderPromise);


const useTimeOut=(resolve,reject)=>{
        setTimeout(()=>{resolve('you saw after 3 seconds')},3000);
        setTimeout(()=>{reject('you saw after 1 seconds')},1000);
}
 
const myPromise= new Promise(useTimeOut);

myPromise.then((res)=>{
   // console.log(rse);
}).catch((err)=>{
    //console.log("error:"+err);
})

//promise all

const deger=1;
const ad='promise';

Promise.all([deger,ad]).then((e)=>{
   // console.log(e);
});


//async await 

 const  retrun5= async ()=>{
    return 5;
}


retrun5().then((e)=>{
    console.log(e);                   // return 5
})


const result=value=>{
      return new Promise((resolve,reject) =>{ 
          console.log('wait for result');
          if(value>=5){
            setTimeout(()=>{resolve('your value equal and greater than 5')},1000);
        }
          else{
              reject('your value less than 5')
          }
      });
}

const yesAwait= async ()=>{
    try{
        const value= await result(40) ;
        console.log(value);
    }catch(err){
        console.log(err);
    }

}

const noAwait= ()=>{
    try{
        const value= result(40) ;
        console.log(value);
    }catch(err){
        console.log(err);
    }

}

//yesAwait(); // prints your value equal and greater than 5
//noAwait();  // prints Promise {<pending>}



// console.log('first message');
// setTimeout(()=>{console.log('second message')},1000);
// console.log('thrid message'); 

// // the output order will be first message, third message,second message


// xhr get request

const xhr= new XMLHttpRequest();

const url= 'https://randomuser.me/api/?results=10';

xhr.responseType='json';

xhr.onreadystatechange=()=>{
    if(xhr.readyState===XMLHttpRequest.DONE){
        xhr.response.results.forEach(user=> {
            const { gender, email } = user;
            console.log(`${gender} ${email}`);     
        });
    }
}
xhr.open('GET',url,true);
xhr.send();


const getRandomUsers=async (value)=>{
    const response= await fetch(`https://randomuser.me/api/?results=${value}`)
    if(response.ok){
        const data= await response.json();
        data.results.forEach((item)=>{
              const{gender, email}=item;
              console.log(` second response ${gender} ${email}`);
        });
    }
}

getRandomUsers(5);

// fetch post request

// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData('https://example.com/answer', { answer: 42 })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
  