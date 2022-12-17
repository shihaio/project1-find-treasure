const mapWidthX = 400;
const mapWidthY = 400;
let click_limit = 15;

$(document).ready(function () {
  // console.log("ready!");
  // 1a. get random axis to locate treasure
  const pickRandomNum = function (inputSize) {
    return Math.floor(Math.random() * inputSize);
  };
  // 1b. locate the treasure
  const treasureLocation = {
    x: pickRandomNum(mapWidthX),
    y: pickRandomNum(mapWidthY),
  };
  // 2. load click counter (decreasing)

  // 3. click map
  // 4. calcultae distance between location A and treasure
  // 5. get Hint
  // 6. condition to win / lose game
  // 7. alert fn (declare win/lose)
  // 8. restart game
  map.on("click", startGame);
});

const startGame = function () {
  // 3. start clicking
  click_limit--;
  // get distance between mouse location and treassure location
  const getDistance = function (event, treasureLocation) {
    const diffdistanceX = event.offsetX - treasureLocation.x;
    const diffdistanceY = event.offsetY - treasureLocation.y;
    return Math.sqrt(
      diffdistanceX * diffdistanceX + diffdistanceY * diffdistanceY
    );
  };
  // get hint
};
