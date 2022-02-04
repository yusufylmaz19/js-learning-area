console.log("hello");
//alert("boooo");

//var age = prompt('What is your age?');
//document.getElementById('id_div').innerHTML='Your age is= '+age;
//console.log('Your age is ='+age);

// var num=5.7;

// console.log(Math.floor(5*num));

my_func();

function my_func() {
  console.log("here is my function ");
}

function greeting(yourname) {
  console.log("Welcome to here " + yourname);
}
// var name1 = prompt("What is Your Name?");
// greeting(name1);

function sum(a, b) {
  console.log(a + b);
}

sum("mustafa", "kemal");
sum(3, 5);
sum(3, "gs");

// var i=0;
// while(i<50){
//     i=i+2;
//     console.log(i);
// }

for (let i = 0; i < 50; i = i + 2) {
  // console.log(i);
}

// data types
let yourage = 15; // number
let yourName = "Yusuf"; // string
let name = { first: "Yusuf", last: "Yılmaz" }; //object
let truht = true; // boolean
let fruits = ["Apple", "Orange", "Banana"]; // array
let random; // undefined
let nothing = null; // null

// strings in JS (common methods)

let fruit = "banana";
let morefruit = "banana\napple"; // new line

console.log(fruit.length); // length  of variable return 6
console.log(fruit.indexOf("a")); // matches the first a and returns its index number. here we get 1
console.log(fruit.slice(1, 4)); //returns ana
console.log(fruit.replace("ban", "123")); // returns 123ana
console.log(fruit.replaceAll("a", "e")); // returns benene
console.log(fruit.toUpperCase()); // returns BANANA
console.log(fruit.toLowerCase()); // returns banana
console.log(fruit.charAt(0)); // returns b
console.log(fruit[0]); // returns b
console.log(fruit.split("a")); // returns {'b','n','n',''}

// array

var meyveler = ["Apple", "Banana", "Cherry", "Pineapples"];
//var meyveler=new Array('Apple','Banana','Cherry','Pineapples');
meyveler[1] = "değiştirdim";
console.log(meyveler);

for (var i = 0; i < meyveler.length; i++) {
  console.log(meyveler[i]);
}

// array common merthods

console.log("to string ", meyveler.toString());
console.log(meyveler.join("--")); //returns Apple--değiştirdim--Cherry..
console.log(meyveler.pop()); // removes last element of array
console.log(meyveler.push("Kiwi")); // adds to last element of
meyveler[meyveler.length] = "new fruit"; // same as push
console.log(meyveler[meyveler.length - 1]); // will returns last element of meyveler array its "Kiwi"
meyveler.shift(); // this func remove first elemnt of array
meyveler.unshift("new fruit"); // insert an element at the start of array

let vegetables = ["asparagus", "tomato", "broccoli"];

let allGrociers = meyveler.concat(vegetables);

console.log(allGrociers);
console.log(allGrociers.slice(1, 4));
console.log(allGrociers.reverse());

let numbers = [1, 25, 3, 6, 8];
console.log(numbers.sort((a, b) => a - b));

let emptyArray = new Array();

for (let num = 1; num <= 10; num++) {
  emptyArray.push(num);
}

console.log(emptyArray);

/// objects

let student = { 
        firstname: "yusuf",
        lastname: "yilmaz",
        age: 21, 
        height: 176,
        studentInfo: function(){
            return this.firstname +' '+ this.lastname;
        }
    };

console.log(student.firstname);
student.firstname='deneme';
console.log(student.firstname);   // reteruns deneme
console.log(student.studentInfo()); 


// if statement
//  var que= prompt("What is yoru age?");

// if(que>=18 && que<=35){
//     console.log('You ara my target');
// }else{
//     console.log('not my audience');
// }

//switch statement

let text='';
let gun=6;
switch (gun){
      case 0:
          text='sunday and weekend';
          break; 
      case 6:
          text='saturday and weekend';
          break;
      default :
           text='weekday';
      }

console.log(text);

