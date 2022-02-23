//importing func. from math.js file

// // import{sum,divid,subtract,multiply,PI} from './math';
// import * as Math from './math';
// // objects functions

// console.log(Math.multiply(9,5));

//let sum=0;
let names = [1, 2, 3, 4, 5];
names.forEach(function (value, index) {
  console.log(index + "--" + value);
});

//objects function
let myobj = {
  name: "John",
  lastname: "Doe",
  age: 35,
};

console.log(Object.keys(myobj)); // return property like name, firstname and age in an array
console.log(Object.values(myobj)); // should be return john doe 35 in an array
console.log(Object.entries(myobj)); //returns an array with our object as string like ["name", "John"] and so on
Object.freeze(myobj); // ths func freeze our object an we can not change any  prop value  anymore

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source); //

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();

const object1 = {
  property1: 42,
};

delete object1.property1; // we can chnage but cannot delete when sealed
console.log(object1.property1); // return 42

const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

var reduce = [1, 2, 3, 4, 5].reduce(function (ac, cur) {
  //do something
});

// callbacks

function callbackexample(name, callback) {
  console.log(callback(name));
}

var callback = function (name) {
  return "Hello " + name;
};

callbackexample("Yusuf", callback);

// spread operator arrays

const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];

const concatArray = [...arrayOne, ...arrayTwo];

//console.log(concatArray);

concatArray.forEach(function (name) {
  console.log(name);
});

const name = "yusuf";
const nameToArray = [...name];

nameToArray.forEach(function (letter) {
  console.log(letter);
});

const sumNumbers = function (n1, n2, n3) {
  return n1 + n2 + n3;
};

const numbers = [1, 5, 7];

//const resultSum=sumNumbers(numbers[0],numbers[1],numbers[2]); // it should give as 1 + 5 + 7 = 13
// another way to sending numbers

const resultSum = sumNumbers(...numbers);

console.log(resultSum);

// spread operators objects

const obj1 = {
  name: "John",
  lastname: "Doe",
  age: 32,
};

const obj2 = {
  address: "bla bla street",
  city: "ny",
};

const obj3 = { ...obj1, ...obj2 };

console.log(JSON.stringify(obj3, null, 1));

// 'this' keyword

const myobj1 = {
  firstname: "yusuf",
  lastname: "yilmaz",
  fullname: function () {
    console.log(`${this.firstname} ${this.lastname}`);
  },
};

myobj1.fullname();

// array descruturing

const mynames = ["kevin", "michael", "angela", "oscar", "pam"];

const [a, b, c] = mynames; // id  do like that michael must be pass [a, ,c]

// const[a,,b,c, ...restOfName]  if we print restOfName it must be equal 'oscar,pam'

console.log(`${a} ${b} ${c}`); // should return kevin michae and angela

// object descruturing

let getUser = () => {
  return {
    firstname: "dwight",
    lastname: "schurte",
    age: 38,
    address: {
      city: "scranton",
      state: "penssylvania",
    },
    job: "salesman",
  };
};

const user = getUser();

// const isim=user.firstname;
//console.log(isim);

const {
  firstname: f,
  lastname,
  address: { city },
} = user; // the variabels object must be same name as our object  or you need the do this like name:n , now n is our variable

console.log(`${f} ${lastname} ${city}`);

// destructuring func

function func() {
  return [1, 2];
}

let num1, num2;
[num1, num2] = func();
console.log(num1); // 1
console.log(num2); // 2

// function default parameters

const employee = (
  yearSalary,
  bonus = {
    temaBonus: 0,
    employeeBonus: 0,
  }
) => {
  return yearSalary + bonus.temaBonus + bonus.employeeBonus;
};

console.log(employee(5000, 5)); //return NaN
console.log(employee(5000)); // return 5000
console.log(employee(5000, { temaBonus: 5, employeeBonus: 5 })); // return 5010

// promieses

const myNamePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(["Kevin", "Oscar", "Stanley", "Ryan"]);
  }, 3000);

  setTimeout(() => {
    reject("no data back from the server,there was an error");
  }, 5000);
});

const mySurNamePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(["Malone", "Martinez", "Hudson", "Howard"]);
  }, 3000);

  setTimeout(() => {
    reject("no data back from the server,there was an error");
  }, 5000);
});

myPromise.then(response =>{
  console.log(response);
}).catch(error =>{
  console.log(error);
});

Promise.all([myNamePromise,mySurNamePromise]).then(data=>{
  const[names,surnames]=data;
  for (let i = 0; i < names.length; i++) {
   const name = names[i];
   const surname = surnames[i];
   console.log(`${name} ${surname}`)
 }
}).catch(error=>{
  console.log(error);
});

// promises and fetch api

const getRandomUsers = (n) => {
  const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`);
  fetchRandomUsers.then((data) => {
    data.json().then((randomUser) => {
      console.log(JSON.stringify(randomUser.results.length));
      randomUser.results.forEach((user) => {
        const { gender: g, email: m } = user;
        console.log(`${g} ${m}`);
      });
    });
  });
};

//getRandomUsers(10);

//generators

const getValues = function* () {
  yield 1;
  yield "hi";
  yield false;
  yield { name: "mike" };
  return "ı'm done!"; // if we out of iter shoul be retrun this check line296
};
const g = getValues();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(JSON.stringify(g.next().value));
console.log(g.next().value);

const getNumbers = function* (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    yield numbers[i];
  }
};

const get=getNumbers([1,2,3,4,5]);

const interval= setInterval(()=>{
    const next=get.next();
    if(next.done){
      console.log("ı'm done! bra");
      clearInterval(interval);
    }else{
      const number=next.value;
      console.log(number);
    }
},1000);

// async await functions

const asyncFunc= async  (name)=>{
  console.log(name);
  // 1. we can yield promises using 'await'
  const promise= new Promise((resolve,reject)=>{
    setTimeout( () => resolve( name.toUpperCase() ), 3000 );
  });
  // 2. return a promises

  const myresult= await promise;
  console.log(myresult);
  return name;
}

asyncFunc('jim').then((res)=>{
 console.log('hi '+res);   //if ı remove async keyword from top that code does not work  
}) 



const getRandomUserss= async n=>{
  const fetchRandomUsers = await fetch(`https://randomuser.me/api/?results=${n}`);
  const data = await fetchRandomUsers.json();
  data.results.forEach(user => {
  const { gender, email } = user;
  console.log(`${gender} ${email}`);
  });
  return data;
};


getRandomUserss(5);


// handling errors async await


const getRandomUsersss= async n=>{
try{  const fetchRandomUsers = await fetch(`https:randomuser.me/api/?results=${n}`);
  const data = await fetchRandomUsers.json();
  data.results.forEach(user => {
  const { gender, email } = user;
  console.log(`${gender} ${email}`);   
  });
  return data;
}
 catch(err){
  console.log(err);
}};

getRandomUsersss(10);

