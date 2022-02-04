// challange 1

// function ageInDays(){
//     birthYear=prompt("What is your birth year?");
// }

var ageInDays = () => {
  var birthYear = prompt("What is youaaar birth year?");
  const d = new Date();
  var currentYear = d.getFullYear();
  var ageInDay = (currentYear - birthYear) * 365;
  var h1 = document.createElement("h1");
  var node = document.createTextNode("Your are " + ageInDay + " in days");
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(node);
  document.getElementById("flexbox-result").appendChild(h1);
};

var reset = () => {
  document.getElementById("ageInDays").remove();
};

// challange 2

var generateCat = () => {
  var img = document.createElement("img");
  // img.setAttribute('id','img-cat');
  // img.setAttribute('src','https://thecatapi.com/api/images/get?format=src&type=gif&size=small');
  // or like that
  img.id = "img-cat";
  img.src =
    "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  document.getElementById("flx-2").appendChild(img);
};

// challange 3

var rpsGame = (yourChoice) => {
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;

  botChoice = botChoices();
  console.log("Computer choice is:" + botChoice);

  var result = decideWinner(humanChoice, botChoice);
  console.log(result);

  var message = finalMessage(result);
  console.log(message);

  frontState(humanChoice, botChoice, message);
};

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };

  var yourScore = rpsDatabase[yourChoice][computerChoice];
  return yourScore;
}

function botChoices() {
  var choices = ["rock", "paper", "scissors"];
  const rnd = Math.floor(Math.random() * 3);
  return choices[rnd];
}

function finalMessage(yourScore) {
  if (yourScore === 0) {
    return { message: "You Lost!", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You Tied!", color: "yellow" };
  } else {
    return { message: "You Won!", color: "green" };
  }
}

function frontState(humanChoice, botChoice, finalMessage) {
  var imgDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    imgDatabase[humanChoice] +
    "' style='box-shadow:0 0 25px 6px rgb(67, 152, 179);'>";
  messageDiv.innerHTML =
    "<h1 style='color:" +
    finalMessage["color"] +
    "; font-size:60px; padding:30px; '>" +
    finalMessage["message"] +
    "</h1>";
  botDiv.innerHTML =
    "<img src='" +
    imgDatabase[botChoice] +
    "' style='box-shadow:0 0 25px 6px rgba(194, 57, 57, 0.822);'>";

  document.getElementById("flx-3").appendChild(humanDiv);
  document.getElementById("flx-3").appendChild(messageDiv);
  document.getElementById("flx-3").appendChild(botDiv);
}

// challange 4 changing buttons color

var allButtons = document.getElementsByTagName("button");

var copyButtons = [];
for (let i = 0; i < allButtons.length; i++) {
  copyButtons.push(getComputedStyle(allButtons[i]).backgroundColor);
}

function buttonColorChange(element) {
  if (element.value === "red") {
    buttonsRed();
  } else if (element.value === "green") {
    buttonsGreen();
  } else if (element.value === "random") {
    buttonsRandom();
  } else if (element.value === "reset") {
    buttonsReset();
  }
}

function buttonsRed() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].style.backgroundColor = "rgb(255,0,0)";
  }
}

function buttonsGreen() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].style.backgroundColor = "rgb(0,255,0)";
  }
}
function buttonsRandom() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].style.backgroundColor =
      "rgb(" + RandomRGB() + "," + RandomRGB() + "," + RandomRGB() + ")";
  }
}
function buttonsReset() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].style.backgroundColor = copyButtons[i];
  }
}

function RandomRGB() {
  return Math.floor(Math.random() * 256);
}

// challange 5

let bjGame = {
  you: { scoreSpan: "#you-bj-result", div: ".youDiv", score: 0 },
  dealer: { scoreSpan: "#dealer-bj-result", div: ".dealerDiv", score: 0 },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "K", "Q"],
  cardsMap: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    A: [1, 11],
    J: 10,
    K: 10,
    Q: 10,
  },
  wins:0,
  losses:0,
  draws:0,
  isStand:false,
  turnsOver:false,
};

const you = bjGame["you"];
const dealer = bjGame["dealer"];

const hitSound = new Audio("/course-1/sounds/swish.m4a");
const winSound = new Audio("/course-1/sounds/cash.mp3");
const lostSound = new Audio("/course-1/sounds/aww.mp3");

document.querySelector("#hit").addEventListener("click", bjHit);
document.querySelector("#deal").addEventListener("click", bjDeal);
document.querySelector("#stand").addEventListener("click", dealerLogic);

function bjHit() {
  if(bjGame['isStand']===false){
  var card = randomCardChoices();
  showCards(card, you);
  updateScore(card, you);
  showScore(you);
  }
}

function randomCardChoices() {
  const rnd = Math.floor(Math.random() * 13);
  return bjGame["cards"][rnd];
}

function showCards(card, activePlayer) {
  if (activePlayer["score"] <= 21) {
    let cardImage = document.createElement("img");
    cardImage.className = "bj-img";
    cardImage.src = `/course-1/images/${card}.png`;
    document.querySelector(activePlayer["div"]).appendChild(cardImage);
    hitSound.play();
  }
}

function bjDeal() {
 if(bjGame['turnsOver']===true){
  var bj_img = document.querySelectorAll(".bj-img");

  for (let i = 0; i < bj_img.length; i++) {
    bj_img[i].remove();
  }
  document.querySelector(you["scoreSpan"]).innerText = 0;
  document.querySelector(dealer["scoreSpan"]).innerText = 0;
  document.querySelector(you["scoreSpan"]).style.color = "#fff";
  document.querySelector(dealer["scoreSpan"]).style.color = "#fff";

  document.querySelector("#bj-result").innerText = "Let's Play";
  document.querySelector("#bj-result").style.color = 'black';

  you["score"] = 0;
  dealer["score"] = 0;

  bjGame['isStand']=false;
 bjGame['turnsOver']=false;
}
}

function updateScore(card, activePlayer) {
  if (card === "A") {
    if (activePlayer["score"] + bjGame["cardsMap"][card][1] <= 21) {
      activePlayer["score"] += bjGame["cardsMap"][card][1];
    } else {
      activePlayer["score"] += bjGame["cardsMap"][card][0];
    }
  } else {
    activePlayer["score"] += bjGame["cardsMap"][card];
  }
}

function showScore(activePlayer) {
  if (activePlayer["score"] > 21) {
    document.querySelector(activePlayer["scoreSpan"]).innerText = "BUST!";
    document.querySelector(activePlayer["scoreSpan"]).style.color = "RED";
  } else {
    document.querySelector(activePlayer["scoreSpan"]).innerText =
      activePlayer["score"];
  }
}
function sleep(ms){
  return new Promise(resolve=>setTimeout(resolve,ms)); 
}

async function dealerLogic() {
  bjGame['isStand']=true;
  while ( dealer['score']<16 &&  bjGame['isStand']===true) {
     var card = randomCardChoices();
    showCards(card, dealer);
    updateScore(card, dealer);
    showScore(dealer);
    await sleep(1000); 
 }

  bjGame['turnsOver']=true;
  let  winner =computeWinner();
  showResult(winner);

}

function computeWinner() {
  let winner;
  if (you["score"] <= 21) {
    if (you["score"] > dealer["score"] || dealer["score"] > 21) {
      bjGame['wins']++;
      winner = you;
    } else if (you["score"]<dealer['score']) {
      winner = dealer;
      bjGame['losses']++;
    } else if (you["score"] === dealer["score"]) {
      bjGame['draws']++;;
    }
  } else if (you["score"] > 21 && dealer["score"] <= 21) {
    winner = dealer;
    bjGame['losses']++;
  } else if (you["score"] > 21 && dealer["score"] > 21) {
    bjGame['draws']++;
  }

  return winner;
}

function showResult(winner) {
  let message, messageColor;
  if (winner === you) {
    message = "You won!";
    messageColor = "greenyellow";
    document.querySelector('#wins').innerText=bjGame['wins'];
    winSound.play();
  } else if (winner === dealer) {
    message = "You lost!";
    messageColor = "red";
    document.querySelector('#losses').innerText=bjGame['losses'];
    lostSound.play();
  } else {
    message = "You drew!";
    messageColor = "yellow";
    document.querySelector('#draws').innerText=bjGame['draws'];
  }
  document.querySelector("#bj-result").style.color = messageColor;
  document.querySelector("#bj-result").innerText = message;
}
