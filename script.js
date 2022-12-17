// $(() => {
//   const titleH1 = () => {
//     $h1 = $('<h1>').text("Just getting started")
//     $('.body').prepend($h2)
//   }
// Global variable:
const map = $("#map");
let click_limit = 15; // we need to click_limit
const width = 400;
const height = 400;

const getRandomNumber = (size) => {
  // to locate the treasure
  // console.log("haha");
  return Math.floor(Math.random() * size);
};

const getDistance = function (event, treasureLocation) {
  const diffX = event.offsetX - treasureLocation.x;
  const diffY = event.offsetY - treasureLocation.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
};

/* $("button").click_limit(function()){
    var x = $("p").offset();
    alert("Top: " + x.top + x.left);
  }*/
let treasureLocation = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};
function startGame() {
  console.log("hahaha");
  // reduce click
  // calculate distance'
  // get hint
  // condition to endGame
  //1. if player distance is within 8 of less, win game
  //2. no click left and distance greater than 8, lose game
}

// A $( document ).ready() block.
$(document).ready(function () {
  // console.log("ready!");
  map.on("click", startGame);
});

const endGame = () => {
  if (click_limit === 0) {
    console.log("No click left", click);
    alert("No clicks left!");
    // once alert "okay" button is click, retart the game!
  }
};

// function clickCounter() {
//   click--;
//   getDistance();
//   console.log("Click is -1 :", click_limit);
//   getRandomNumber();
//   endGame();
// }

// logic of the game

// when i click on the map, then...
//
