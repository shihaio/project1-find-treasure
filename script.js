const mapWidthX = 600;
const mapWidthY = 400;
const clickLimit = 20;
let clicks;
let treasureLocation;
const map = $("#map");
const distanceNotification = $("#distance");
const clickNotification = $("#click");
const replayButton = $("#replay-btn");

const pickRandomNum = function (inputSize) {
  return Math.floor(Math.random() * inputSize);
};

const restartGame = function () {
  clicks = clickLimit;

  treasureLocation = {
    x: pickRandomNum(mapWidthX),
    y: pickRandomNum(mapWidthY),
  };
  distanceNotification.text("Start the game, click the map!");
  clickNotification.text("");
};

const getDistance = function (event, treasureLocation) {
  const diffdistanceX = event.offsetX - treasureLocation.x;
  const diffdistanceY = event.offsetY - treasureLocation.y;
  return Math.sqrt(
    diffdistanceX * diffdistanceX + diffdistanceY * diffdistanceY
  ).toFixed(2);
};

const getDistanceHint = function (distance) {
  if (distance < 10) {
    return (
      "Almost find the treasure! \nYou are " +
      distance +
      " away from the treasure."
    );
  } else if (distance < 20) {
    return (
      "About to find the treasure! \nYou are " +
      distance +
      " away from the treasure."
    );
  } else if (distance < 40) {
    return (
      "Around the treasure area! \nYou are  " +
      distance +
      " away from the treasure."
    );
  } else if (distance < 80) {
    return (
      "Not far away from the treasure! \nYou are " +
      distance +
      " away from the treasure."
    );
  } else if (distance < 160) {
    return (
      "Far away from the treasure! \nYou are " +
      distance +
      " away from the treasure."
    );
  } else if (distance < 320) {
    return (
      "Very far away from the treasure! \nYou are " +
      distance +
      " away from the treasure."
    );
  } else {
    return "Out of the way! \nYou are " + distance + " away from the treasure.";
  }
};

const endGame = function (distance, clicks) {
  console.log("distance", distance, typeof distance);
  console.log("clicks", clicks, typeof clicks);
  if (distance < 8) {
    alert(
      "Congrats! You found the buried treasure." + " Click left:  " + clicks
    );
    restartGame();
  } else if (clicks === 0) {
    alert("Treasure is still buried. Please try again.");
    restartGame();
  }
};

const findTreasure = function (event) {
  console.log(event);
  --clicks;
  console.log("click count: ", clicks);
  const distance = getDistance(event, treasureLocation);
  console.log(distance);
  const distanceAlert = getDistanceHint(distance);
  console.log(distanceAlert);
  console.log(
    "This is the mouse location of click X coordinate: ",
    event.offsetX
  );
  console.log(
    "This is the mouse location of click Y coordinate: ",
    event.offsetY
  );
  distanceNotification.text("Distance Notfication: " + distanceAlert);
  clickNotification.text("Clicks left: " + clicks);
  endGame(distance, clicks);
};
// NOTE: 1
$(document).ready(function () {
  clicks = clickLimit;

  treasureLocation = {
    x: pickRandomNum(mapWidthX),
    y: pickRandomNum(mapWidthY),
  };
  map.on("click", findTreasure);
  replayButton.on("click", restartGame);
});

// retrieve information from event object to output the x&y coordinates of my click location
// hold information about the click event, such as location of the click.
