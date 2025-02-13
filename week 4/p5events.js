/* const myRectangle = {
  x: 100,
  y: 100,
  width: 150,
  height: 100 */
//}
// make lots of rectangles!
const myRectangles = [];
let startingX = 0;
let startingY =0;
let width = 50;
let height = 50;
let gap = 20;

const myCircle = {
  x: 50,
  y: 50,
  diameter: 25
}
function setup() {
  createCanvas(800, 600);
  // background(220);
}

function draw() {
  background(150);
  noLoop();
  // outler loop for row
  for(let j = 0; j < 2; j++) {
    for(let i = 0; i <10; i++) {
      rect(startingX, startingY, width, height);
      startingX = startingX + width + gap;
    }
    startingY = startingY + height + gap;
    startingX = 0;
  }
  //rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
  // myRectangle.x = myRectangle.x +1;
  // circle(myCircle.x, myCircle.y, myCircle.diameter)
}
function mousePressed() {
  const distanceFromCircleCenter = dist(myCircle.x, myCircle.y, mouseX, mouseY);
  console.log(distanceFromCircleCenter)
  if(distanceFromCircleCenter <= myCircle.diameter) {
    console.log("you hit")
  } else {
    console.log("you missed")
  }
}
  /* if(
    mouseX > myRectangle.x &&
    mouseX < myRectangle.x + (myRectangle.width) &&
    mouseY > myRectangle.y &&
    mouseY < myRectangle.y + (myRectangle.height)) {
  console.log("click between left and right side of rect")
  } else {
    console.log("you missed the rectangle");
  }
} // shows x y of mouse in console
 */
// use rectangles for assignment - fewer than 20 cards