function setup() {
  createCanvas(600, 600);
}
// inspired by this tile: https://claysquared.com/tile/projects/kitchen/on-point-mid-century-kitchen/
function createTile(originX, originY, backgroundColor, strokeColor, secondaryColor, tertiaryColor) {
  translate(originX, originY);
  // background
  fill(backgroundColor);
  rect(0, 0, 200, 200);
  // first row diagonals
  stroke(strokeColor)
  //stroke("#9c9e8e");
  strokeWeight(3);
  fill(secondaryColor);
  //fill("#2c725d");
  quad(0, 50, 50, 0, 100, 50, 50, 100);
  quad(100, 50, 150, 0, 200, 50, 150, 100);
  // second row diagonals
  fill(tertiaryColor);
  //fill("#ebcd92");
  quad(0, 150, 50, 100, 100, 150, 50, 200);
  quad(100, 150, 150, 100, 200, 150, 150, 200);
  noStroke();
}
function draw() {
  createTile(0, 0, "yellow", 'yellow', "blue", "black");
  createTile(0, 200, 'green', "orange", "gray", "sienna");
  // numbers in reference to previous origin
  createTile(0, 200, "white", "cyan", "pink", "green");
  createTile(200, -400, "orange", "seashell", "seashell", "sienna");
  createTile(0, 200, "red", "mistyrose", "gray", "aqua");
  createTile(0,200, "navy", "gold", "darkmagenta", "lime");

  
  noLoop();
}