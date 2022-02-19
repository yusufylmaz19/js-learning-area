const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
const tryAgain = document.querySelector(".tryAgain");
let player = { speed: 5, score: 0 };

startScreen.addEventListener("click", start);
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);

let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

function playGame() {
  const car = document.querySelector(".car");
  moveLines();
  moveEnemy(car);
  let road = gameArea.getBoundingClientRect();
  if (player.start) {
    if (keys.ArrowUp && player.y > 0) {
      player.y -= player.speed;
    }
    if (keys.ArrowDown && player.y < road.bottom) {
      player.y += player.speed;
    }
    if (keys.ArrowRight && player.x < road.width - 50) {
      player.x += player.speed;
    }
    if (keys.ArrowLeft && player.x > 0) {
      player.x -= player.speed;
    }
    car.style.left = player.x + "px";
    car.style.top = player.y + "px";

    window.requestAnimationFrame(playGame);
  }
  player.score++;
  score.innerText = "Your score:" + player.score;
}

function endGame() {
  // score.innerHTML ="Game Over score was: "+player.score;
  player.start = false;
  startScreen.classList.remove("hide");
}

function pressOn(e) {
  e.preventDefault();
  keys[e.key] = true;
}

function pressOff(e) {
  e.preventDefault();
  keys[e.key] = false;
}

function moveLines() {
  let lines = document.querySelectorAll(".line");
  lines.forEach((item) => {
    if (item.y > 1500) {
      item.y -= 1500;
    }
    item.y += player.speed;
    item.style.top = item.y + "px";
  });
}

function moveEnemy(car) {
  let enemies = document.querySelectorAll(".enemy");
  enemies.forEach((item) => {
    if (isCollide(car, item)) {
      endGame();
    }
    if (item.y > 1500) {
      item.y = -600;
      item.style.left = Math.floor(Math.random() * 150) + "px";
    }
    item.y += player.speed;
    item.style.top = item.y + "px";
  });
}

function isCollide(a, b) {
  let aRect = a.getBoundingClientRect();
  let bRect = b.getBoundingClientRect();

  return !(
    aRect.bottom < bRect.top ||
    aRect.top > bRect.bottom ||
    aRect.left > bRect.right ||
    aRect.right < bRect.left
  );
}

function start() {
  startScreen.classList.add("hide");
  score.classList.remove("hide");
  gameArea.innerHTML = "";
  player.start = true;
  player.score = 0;
  for (let i = 0; i < 10; i++) {
    const line = document.createElement("div");
    line.setAttribute("class", "line");
    line.y = i * 150;
    line.style.top = i * 150 + "px";
    gameArea.appendChild(line);
  }
  window.requestAnimationFrame(playGame);
  const car = document.createElement("div");
  car.setAttribute("class", "car");
  gameArea.appendChild(car);
  player.x = car.offsetLeft;
  player.y = car.offsetTop;
  for (let i = 0; i < 3; i++) {
    const enemy = document.createElement("div");
    enemy.setAttribute("class", "enemy");
    enemy.y = (i + 1) * 600 * -1;
    enemy.innerText=i+1;
    enemy.style.top = enemy.y + "px";
    enemy.style.left = Math.floor(Math.random() * 350) + "px";
    enemy.style.backgroundColor = randomColor();
    gameArea.appendChild(enemy);
  }
}

function randomColor(){
  function c() {
    let rnd = Math.floor(Math.random() * 256).toString(16);
    return ("0" + String(rnd)).substr(-2);
  }
  return "#" + c() + c() + c();
}
