class Animal{
    constructor(name,age){
        console.log(`${name} is an animal and was created`)
        this.name=name;
        this.age=age;
    }

    static iAmAStaticMethod(){
     console.log('i am a static method inside of animal class');
    }

    eat(){
        console.log(`${this.name} is eating`);
    }

    sleep(){
        console.log(`${this.name} is sleeping`);
    }
    logAge(){
        console.log(`${this.name} is ${this.age} age`)
    }
}

class Dog extends Animal{   // now we made it inheritance from animal to dog class dog class use evryting inside of animal class
 constructor(name,age,breed){
     super(name,age)
     this.breed=breed;
 }
 logBreed(){
     console.log(`${this.name} is ${this.breed}`);
 }

 logAgeFromDog(){
      super.logAge();
 }
}


const mike=new Dog('mike',3,'bulldog');
mike.logBreed();
mike.logAgeFromDog(); //mike is 3 age
mike.logAge();  //mike is 3 age

Animal.iAmAStaticMethod(); // you dont need any object for calling static methods

const cat= new Animal('blue',2);
cat.sleep();
cat.eat();
cat.logAge();