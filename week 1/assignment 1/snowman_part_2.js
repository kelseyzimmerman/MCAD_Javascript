let grid = undefined;
let stroke1 = prompt("Enter a color name in lower case.", "gray");
let stroke2 = prompt("Enter another basic color.", "purple");
function setup() {
  createCanvas(402, 645);
  background("#ccc");
  grid = loadImage("100px_grid.png");
  backdrop = loadImage("background.png");
}
// could only to get loadImage to work when image lives inside project folder - not sure if that's
// how it's supposed to be but alas!
function draw() {
  background(backdrop);
  // snowman legs
  fill("#f1f1f1");
  strokeWeight(5);
  stroke(stroke1);
  // left
  ellipse(150, 350, 100);
  // h in [h] means optional
  // right
  ellipse(650, 650, 200);
  // body
  ellipse(500, 450, 350, 400);
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
  point(425, 200);
  point(575, 200);
  // mouth
  noFill();
  strokeWeight(10);
  arc(500, 200, 80, 80, 0, HALF_PI);


}
