const mapWidthX = 600;
const mapWidthY = 400;
const clickLimit = 20;
let clicks;
let treasureLocation;
const map = $("#map");
const distanceNotification = $("#distance");
const clickNotification = $("#click");
const replayButton = $("#replay-btn");

// 1a. get random axis to locate treasure
const pickRandomNum = function (inputSize) {
  return Math.floor(Math.random() * inputSize);
};

const restartGame = function () {
  clicks = clickLimit;

  treasureLocation = {
    x: pickRandomNum(mapWidthX),
    y: pickRandomNum(mapWidthY),
  };
  distanceNotification.text("Welcome, click the map!");
  clickNotification.text("");
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
    return "Boiling hot!, your distance is:" + distance;
  } else if (distance < 20) {
    return "Really hot, your distance is:" + distance;
  } else if (distance < 40) {
    return "Hot, your distance is:" + distance;
  } else if (distance < 80) {
    return "Warm, your distance is:" + distance;
  } else if (distance < 160) {
    return "Cold, your distance is:" + distance;
  } else if (distance < 320) {
    return "Really cold, your distance is:" + distance;
  } else {
    return "Freezing, your distance is:" + distance;
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

const startGame = function (event) {
  // event is triggered! trigger a click event.
  // 3. start clicking
  --clicks;
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

$(document).ready(function () {
  clicks = clickLimit;

  treasureLocation = {
    x: pickRandomNum(mapWidthX),
    y: pickRandomNum(mapWidthY),
  };
  map.on("click", startGame);
  replayButton.on("click", restartGame);
});

// 3. click map
// 4. calcultae distance between location A and treasure
// 5. get Hint
// 6. condition to win / lose game
// 7. alert fn (declare win/lose)
// 8. restart game
// 'click' is an event handler
// we activate the click handler.

// retrieve information from event object to output the x&y coordinates of my click location
// hold information about the click event, such as location of the click.
