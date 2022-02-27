// factory function
function createCircle(radius){
    return{
        radius,
        draw:function(){
            console.log('draw');
        }
    }
}

const circle = createCircle(2);
//console.log(circle);


// constructor funciton

function Circle(radius){
    console.log(this);
    this.radius=radius;
   this.draw=function(){
       console.log('draw');
   }
}

const circle2= new Circle(3); // new operator create new empty object

// const Circle1= new Function(`radius`,`this.radius=radius;
// this.draw=function(){
//     console.log('draw');}
//     `)


// const circle3=new Circle1(6);

Circle.call({},1)

// function calll and function apply funciton bind

let person={
    fullname:function(){
        console.log('fullname:' +this.name+ this.surname);
    }
}

let person1={
    name:'Jim',
    surname:'Halpert'
}

person.fullname.call(person1); // returns fullname: Jim Halpert

person.fullname.apply(person1); // returns fullname: Jim Halpert


// difference between Cal an Applly is call function take arguments separately but apply function take arguments Array
// such as :    person.fullname.call(person1,'Osla','Norway')  person.fullname.apply(person1,['Oslo','Norway']);

const person11 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person11.fullName.bind(member);

  let number=10;
  let number1={value:10};

  function  increase(number){
      number++;
  }

  function  increase1(number1){
    number1.value++;
}

  increase(number);
  console.log(number);  // returns 10

  increase1(number1);
  console.log(number1); // returns value:11

  //value types
  // string
  // number
  // undefined
  // boolean
  // symbol
  //null


  //reference types 
  // object
  // arrays
  // functions


  // inheritance

  function Book(name,author,year){
      this.name=name;
      this.author=author
      this.year=year;
      }


      // prototype
Book.prototype.getSummary=function(){
    return `Book ${this.name} was writen by ${this.author} in ${this.year} year.`
}      

// magazine constructor
function Magazine(name,author,year,month){
    Book.call(this,name,author,year);

    this.month=month;
}

// inherit prototype
Magazine.prototype=Object.create(Book.prototype);

const mg1= new Magazine('White Nights', 'F.M Dostoyevsky', '1846','Apr');

// use magazine constructor

Magazine.prototype.constructor=Magazine;
// console.log(mg1)


console.log(mg1.getSummary())