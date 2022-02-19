const message = document.querySelector(".gameMessage");
const buttons = document.querySelectorAll("button");
const gamePlay = document.querySelector(".gamePlay");
const result = document.querySelector(".res");
const userPlayer = document.querySelector(".userPlayer");

let deck = [];
let deals = [];
let player = [];
let ingame = false;
let round = 0;
let total=0;
let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let suits = ["hearts", "diams", "clubs", "spades"];
buttons.forEach(function (item) {
  item.addEventListener("click", playGame);
});

function playGame(e) {
  let temp = e.target.textContent;
  if (temp === "Start") {
    btntoggle();
    startGame();
  } else if (temp == "Attack") {
    let input = document.querySelector("input").value;
    result.innerHTML = "";
    round = 0;
    for (let i = 0; i < input; i++) {
      if (ingame) {
        message.innerHTML = "Round" + (i + 1);
        makeCards();
      }
    }
  }
}

function btntoggle() {
  buttons[0].classList.toggle("hide");
  buttons[1].classList.toggle("hide");
}

function startGame() {
  ingame = true;
  gamePlay.innerHTML="";  
  let numbers = document.querySelector("input").value;
  buildDeck();
  setupPlayer(numbers);
  dealsCards(0);
  makeCards();  
  document.querySelector('input').value=1;  

}

function setupPlayer(num) {
  deals = [];
  player = [];
  for (let i = 0; i < num; i++) {
    const div = document.createElement("div");
    div.setAttribute("id", "player-" + (i + 1));
    div.classList.add("player");
    const div1 = document.createElement("div");
    div1.textContent = "Player " + parseInt(i + 1);
    player[i] = document.createElement("div");
    player[i].textContent = "Cards";
    div.appendChild(div1);
    div.appendChild(player[i]);
    gamePlay.appendChild(div);
    deals.push([]);
    console.log(div);
    console.log(deals);
  }
}

function buildDeck() {
  deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      total++;
      let cards = {};
      cards.suit = suits[i];
      cards.rank = ranks[j];
      cards.value = j + 1;
      deck.push(cards);
    }
  }
}

function dealsCards(playerCard) {
  playerCard = playerCard >= player.length ? 0 : playerCard;

  if (deck.length > 0) {
    let rnd = Math.floor(Math.random() * deck.length);
    let cards = deck.splice(rnd, 1)[0];
    deals[playerCard].push(cards);
    playerCard++;
    return dealsCards(playerCard);
  } else {
    message.textContent = "card dealt now";
    return;
  }
}

function showCards(el, card) {
  if (card !== undefined) {
    el.style.backgroundColor = "white";
    let html1 = card.rank + "<br>&" + card.suit + ";";
    let html2 = card.rank;
    let html3 = card.rank;
    let html4 = "&" + card.suit + ";";
    let html5 = "&" + card.suit + ";";

    const div = document.createElement("div");
    div.classList.add("card");

    if (card.suit === "diams" || card.suit === "hearts") {
      div.classList.add("red");
    }

    const span1 = document.createElement("span");
    span1.innerHTML = html2;
    span1.classList.add("tiny");
    span1.classList.add("top-left");
    div.appendChild(span1);

    const span5 = document.createElement("span");
    span5.innerHTML = html5;
    span5.classList.add("tiny");
    span5.classList.add("top-right");
    div.appendChild(span5);

    const span2 = document.createElement("span");
    span2.innerHTML = html1;
    span2.classList.add("big");
    div.appendChild(span2);

    const span3 = document.createElement("span");
    span3.innerHTML = html3;
    span3.classList.add("tiny");
    span3.classList.add("bottom-right");
    div.appendChild(span3);

    const span4 = document.createElement("span");
    span4.innerHTML = html4;
    span4.classList.add("tiny");
    span4.classList.add("bottom-left");
    div.appendChild(span4);

    el.appendChild(div);
  }
}

function dealRound(playerList, temp) {
  let playOff = [];
  let curWinner = {
    high: null,
    player: player[0]
  };

  for (let i = 0; i < playerList.length; i++) {
    let templayerList = playerList[i];
    if (deals[templayerList].length > 0) {
      let card = deals[templayerList].shift();
      if (curWinner.high === card.value) {
        if (playOff.length === 0) {
          playOff.push(curWinner.player);
        }
        playOff.push(templayerList);

      } else if (!curWinner.high || curWinner.high < card.value) {
        playOff=[];
        curWinner.high = card.value;
        curWinner.player = templayerList;
        curWinner.card = card;
      }

      temp.push(card);
      showCards(player[templayerList], card);
    }
  }

  if (playOff.length > 0) {
    dealRound(playOff, temp);
  } else {
    updater(curWinner.player, temp);
  }

}

function makeCards() {
  let temp = [];
  let playerList = [];
  for (let i = 0; i < player.length; i++) {
    player[i].innerHTML = "";
    if (deals[i].length> 0) {
      playerList.push(i);
    }
    else if(playerList.length===1){
        winGame();
    }
  }
  dealRound(playerList,temp);
}

function updater(winner, temp) {
  player[winner].style.backgroundColor = "green";

  temp.sort(function () {
    return 0.5 - Math.random();
  });

  for (let i = 0; i < player.length; i++) {
    const div = document.createElement("div");
    div.classList.add("stats");
    if(deals[i].length===total){
      winGame(); 
      div.innerHTML ="Total <br>"+deals[i].length+"card";
      // restart game
    }else{
    div.innerHTML =
      (deals[i].length < 1) ? "lost" : "cards: " + (deals[i].length - 1);
    }
    player[i].appendChild(div);
  }

  for (let rec of temp) {
    deals[winner].push(rec);
  }
  result.innerHTML +=
    "Player " + (winner + 1) + " Won " + temp.length + " cards <br> ";
}

// reseting options
function winGame(){
  btntoggle();
  ingame=false;
  for(let i=0; i<player.length;i++){
    player[i].innerHTML += (deals[i].length>=total)?'<br> Winner':'<br> Loser';
  }
  message.innerHTML="select number of players";
  document.querySelector('input').value=3;
}