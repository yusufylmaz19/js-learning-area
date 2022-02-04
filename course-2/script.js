//challange1 
document.querySelector("#btn-1").addEventListener("click", incrementNumber);
document.querySelector("#btn-2").addEventListener("click", saveCount);

var count=0;
var h2=document.getElementById('count-el');
var div=document.getElementById('result-div');
div.innerText='Previous entries: ';
function incrementNumber(){
    count++;
    h2.innerText=count;
}

function saveCount(){
  div.textContent+=  count + ' - ';
  count=0;
  h2.innerText=count;
} 

//  challange 2

var getRandomCard=()=> {
 
  return  Math.floor(Math.random()*11)+1;
}


let firstCard=getRandomCard();
let secondCard=getRandomCard();
let cards=[firstCard,secondCard];
let sum=firstCard+secondCard;
let hasbBlackJacke=false;
let isAlive=true;
let message='';


var p=document.getElementById('message-el');
var sumEl=document.getElementById('sum-el');
var cardEl=document.getElementById('card-el');

document.querySelector('#btn-3').addEventListener('click',startGame);
document.querySelector('#btn-4').addEventListener('click',newCard);

function startGame(){
  renderGame();
}

function renderGame(){
    cardEl.textContent='Card:'+cards[0]+'-'+cards[1];   
    sumEl.textContent= sum;
       if(sum<20){
          message='Do you want to new card?';
       }else if(sum===21){
          message="Whoo!! You've got a Blackjake!";
          hasbBlackJacke=true;
       }else {
          message="you're out of the game!";
          isAlive="false";
       }
       p.textContent=message; 
}


function newCard(){
  let card=getRandomCard();
  sum +=card;
  renderGame();
  cards.push(card);
  showCards();

}

function showCards (){
  console.info(cards);
}

