//const playGame=confirm('Do you wanna play a game');

let playGame = 0;

while (playGame) {
  let playerChoice = prompt("Choose your thing");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let compChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        compChoice === 1 ? "rock" : compChoice === 2 ? "paper" : "scissors";

      let result =
        playerOne === computer
          ? "Draw"
          : playerOne === "rock" && computer === "paper"
          ? "player lose"
          : playerOne === "rock" && computer === "scissors"
          ? "player win"
          : playerOne === "paper" && computer === "rock"
          ? "player win"
          : playerOne === "paper" && computer === "scissors"
          ? "player lose"
          : playerOne === "scissors" && computer === "rock"
          ? "player lose"
          : "player win";
      alert(result);
      let playAgain = confirm("Do you wanna play again");
      playAgain ? location.reload() : alert("thnks for play again");
    } else {
      alert("you didn't write anyhting");
    }
  } else {
    alert("we guess you change your mind. maybe next time");
  }
}

let vehicle = {
  wheele: 4,
  engine: () => {
    return "vroomm";
  },
};

let truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheele); //  Inheritance

// classes

class Pizza {

 crust='orignal' //public field
 #sauce='classic' // private field
 #size;
  constructor(pizzaSize) {
     this.#size=pizzaSize;
  }

  getCrust(){
    return this.crust;
  }

  setCrust(pizzaCrust){
      this.crust=pizzaCrust;
  }

  herWeGo(){
      console.log(`here is your ${this.crust} ${this.#sauce} sauce ${this.#size} Pizza.`);
  }
}

const instance= new Pizza('small');
//instance.setCrust('thin');
//console.log(instance.getCrust());
instance.herWeGo();


// error handling
"use strict"
const makeError=()=>{
  let i=0;
  while(i<=5){
    try{
      if(i%2!==0){
        throw('odd number');
      }
       console.log('even number');
    }
    catch(err){
       console.error(err);
    }
    finally{
      console.log("...finally");
      i++;
    }
 }
};

makeError();