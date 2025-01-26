let grid = undefined;
let stroke1 = prompt("Enter a color name in lower case.", "gray");
let stroke2 = prompt("Enter another basic color.", "purple");
let noseColor = prompt("Enter a color for the nose.", "orange");
function setup() {
  createCanvas(1000, 800);
  background("#ccc");
  grid = loadImage("100px_grid.png");
}
// could only to get loadImage to work when image lives inside project folder - not sure if that's
// how it's supposed to be but alas!
function draw() {
  background(grid);
  // snowman classic base
  fill("#f1f1f1");
  strokeWeight(5);
  stroke(stroke1);
  ellipse(500, 600, 300);
  // h in [h] means optional
  // body
  ellipse(500, 400, 250);
  // head
  ellipse(500, 200, 200);
  // hat brim
  strokeWeight(35);
  stroke(stroke2);
  line(400, 120, 600, 120);
  // hat body
  quad(400, 50, 600, 50, 550, 120, 450, 120);
  // eyes
  stroke(0);
  strokeWeight(50);
  point(570, 200);
  point(430, 200);
  // mouth
  noFill();
  strokeWeight(10);
  //arc(500, 300, 100, 80, 0, HALF_PI);
  arc(500, 250, 90, 80, 0, HALF_PI);
  // nose
  noStroke();
  fill(noseColor);
  triangle(515, 270, 500, 270, 490, 190);


}
