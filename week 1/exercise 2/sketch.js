function setup() {
// create 600px by 600 px canvas
  createCanvas(600, 600);
}

let oneLiner = "The Well Is Deep and Then It Floods"


//fill must be called before shape to change color!

function draw() {
  let x = random(600);
  let y = random(600);
  background(77, 247, 239);
  //when mouse button is pressed, circles turn black
  //white circles drawn at mouse position
  // circle in sun position
  fill("yellow");
  stroke("orange");
  strokeWeight("2");
  circle(550, 50, 100);
  // create text box
  fill(255);
  noStroke();
  textSize(12);
  if (mouseIsPressed === true) {
    textSize(20);
    fill("blue");
    text(oneLiner, x, y);
    text(oneLiner, x, y);
    text(oneLiner, x, y);
  } else {
    fill(0);
  }
  text(oneLiner, 100, 200);

  // make it so when you press mouse the color and size of text changes

// grass and all that
  stroke(0);//black outline

  strokeWeight(1);//outline thickness

  fill("green");

  rect(0, 400, 600, 200);
 
  //emojis
  textSize(75)
  text("🌸", 100, 450) //flower
  text("🐞", mouseX, mouseY) //ladybug
}

