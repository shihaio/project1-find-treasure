const mapWidthX = 400;
const mapWidthY = 400;
const clickLimit = 15;
let clicks;
let treasureLocation;
map = $("#map");
distanceNotification = $("#distance");
clickNotification = $("#click");

// declare function of getDistance

// console.log("ready!");
// 1a. get random axis to locate treasure
const pickRandomNum = function (inputSize) {
  return Math.floor(Math.random() * inputSize);
};

// console.log(treasureLocation.x);
// console.log(treasureLocation.y);
const restartGame = function () {
  console.log("RESTART GAME");
  // make the click become maximum again
  clicks = clickLimit;
  // random treausre again
  treasureLocation = {
    x: pickRandomNum(mapWidthX),
    y: pickRandomNum(mapWidthY),
  };
};
const getDistance = function (event, treasureLocation) {
  const diffdistanceX = event.offsetX - treasureLocation.x;
  const diffdistanceY = event.offsetY - treasureLocation.y;
  return Math.sqrt(
    diffdistanceX * diffdistanceX + diffdistanceY * diffdistanceY
  );
};
const getDistanceHint = function (distance) {
  if (distance < 10) {
    return "Boiling hot!";
  } else if (distance < 20) {
    return "Really hot";
  } else if (distance < 40) {
    return "Hot";
  } else if (distance < 80) {
    return "Warm";
  } else if (distance < 160) {
    return "Cold";
  } else if (distance < 320) {
    return "Really cold";
  } else {
    return "Freezing";
  }
};

const endGame = function (distance, clicks) {
  if (distance < 8) {
    alert(
      "Congrats! You found the buried treasure." + "   Click left:  " + clicks
    );
    restartGame();
  } else if (clicks === 0) {
    alert("Treasure is still buried. Please try again.");
    restartGame();
  }
};
$(document).ready(function () {
  restartGame();

  // clicks = clickLimit;
  // 1b. locate the treasure. x & y coordnates
  // treasureLocation = {
  //   x: pickRandomNum(mapWidthX),
  //   y: pickRandomNum(mapWidthY),
  // };
  // 2. load click counter (decreasing)
  map.on("click", startGame);
  // console.log("hehehe");
  // map.off("click", startGame);
  // 3. click map
  // 4. calcultae distance between location A and treasure
  // 5. get Hint
  // 6. condition to win / lose game
  // 7. alert fn (declare win/lose)
  // 8. restart game
});
// 'click' is an event handler
// we activate the click handler.

// retrieve information from event object to output the x&y coordinates of my click location
// hold information about the click event, such as location of the click.

const startGame = function (event) {
  // event is triggered! trigger a click event.
  // 3. start clicking
  clicks--;
  console.log("click count: ", clicks);
  // getDistance(event, treasureLocation);
  const distance = getDistance(event, treasureLocation);
  console.log(distance);
  const distanceAlert = getDistanceHint(distance);
  console.log(distanceAlert);
  distanceNotification.text("Distance Notfication: " + distanceAlert);
  clickNotification.text("Clicks left: " + clicks);
  endGame(distance, clicks);
};
// get distance between mouse location and treassure location
// get hint
