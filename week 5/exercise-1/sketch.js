let blockX = 0;
let blockY = 0;
let drawTimer;
const speed = 10;
// speed and dist will not change
const distance = 2; 
function setup() {
  createCanvas(500, 500);
  background("orange");
  // drawBlock(blockX, blockY, 255);
}

function drawBlock(x, y, color) {
  fill(color || 255);
  rect(x, y, 50, 50);
}
function keyPressed() {
  if (keyIsPressed === true) {
    drawBlock(blockX, blockY, "yellow");
  console.log("you pressed the left arrow", keyCode === LEFT_ARROW);
}}
// executes every 50 (or "speed" seconds
drawTimer = window.setInterval(() => {
  // set condition for if blocks exceed
  if (blockY - 50 <= height) {
    drawBlock(blockX, blockY, 255);
    blockY += distance;
  } else {
    blockY = 0;
    blockX += 50;
  }
   if (blockY - 50 > height && blockX - 50 > width) {
    window.clearInterval(drawTimer);
    alert('done');
   }
}, speed);
