function setup() {
  createCanvas(200, 200);
}
// inspired by this tile: https://claysquared.com/tile/projects/kitchen/on-point-mid-century-kitchen/
function createTile() {
  translate(0, 0);
  // background
  fill("#74ae9c");
  rect(0, 0, 200, 200);
  // first row diagonals
  stroke("#9c9e8e");
  strokeWeight(3);
  fill("#2c725d");
  quad(0, 50, 50, 0, 100, 50, 50, 100);
  quad(100, 50, 150, 0, 200, 50, 150, 100);
  // second row diagonals
  fill("#ebcd92");
  quad(0, 150, 50, 100, 100, 150, 50, 200);
  quad(100, 150, 150, 100, 200, 150, 150, 200);
  noStroke();
}
function draw() {
  createTile();
  noLoop();
}