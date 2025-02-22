let rectX = 0;
let rectWidth = 75;
let clickCount = 0;

function setup () {
  createCanvas(500, 500);
}

function draw () {
  background("black");
  text("Click the moving square!", 50, 250);
  drawShape();
  rectX += 2.5;
  if(rectX > width) {
    noLoop();
    text("Your score was " + clickCount, 100, 300);
  }
}

function mousePressed() {
  if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= 0 && mouseY <= 75)) {
    clickCount++;
    console.log('hit', clickCount);
  }
}

function drawShape() {
  fill('limegreen');
  rect(rectX, 0, rectWidth, 75);
}