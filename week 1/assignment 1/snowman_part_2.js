let grid = undefined;
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
  strokeWeight(2);
  stroke("gray");
  // body
  ellipse(200, 550, 40);
  // head
  ellipse (203, 521, 30);
  ellipse(200, 500, 20);
  stroke("black");
  // arms
  line(235, 530, 216, 515);
  line(195, 530, 190, 515);
  // child snowman
  // bottom
  stroke("gray");
  ellipse(248, 560, 25);
// torso
  ellipse(246, 544, 20);
  // head
  ellipse(248, 530, 15);
  //arms
  stroke("black");
  line(249, 540, 233, 535);
  line(235, 540, 227, 530);

}
