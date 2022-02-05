//challange1 
document.querySelector("#btn-1").addEventListener("click", incrementNumber);
document.querySelector("#btn-2").addEventListener("click", saveCount);

var count=0;
var h2=document.getElementById('count-el');
var div=document.getElementById('result-div');
div.textContent='Previous entries: ';
function incrementNumber(){
    count++;
    h2.textContent=count;
}

function saveCount(){
  div.textContent+=  count + ' - ';
  count=0;
  h2.textContent=count;
} 



//  challange 2


var getRandomCard=()=> {
  var rnd=Math.floor(Math.random()*13)+1;
  if(rnd>10){
    rnd=10;
  }
    else if(rnd===11 || rnd===1){
    if(sum + rnd <=21){
      rnd=11;
     }else{
       rnd=1;
 
     }
  }
  return  rnd;
}



let cards=[];
let sum=0;
let hasbBlackJacke=false;
let isAlive=true;
let message='';


var p=document.getElementById('message-el');
var sumEl=document.getElementById('sum-el');
var cardEl=document.getElementById('card-el');

document.querySelector('#btn-3').addEventListener('click',startGame);
document.querySelector('#btn-4').addEventListener('click',newCard);

function startGame(){
  isAlive=true;
  let firstCard=getRandomCard();
  let secondCard=getRandomCard();
  cards=[firstCard,secondCard];
  sum=firstCard+secondCard;
  renderGame();
}

function renderGame(){
    cardEl.textContent='Card:';
    showCards();
    sumEl.textContent= sum;
       if(sum<=20){
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
  if(isAlive===true && hasbBlackJacke===false){
  let card=getRandomCard();
  sum +=card;
  cards.push(card);
  renderGame();
}
}

function showCards (){
   for(let i=0;i<cards.length; i++){
     cardEl.textContent +=cards[i] +' ';
   }
}

