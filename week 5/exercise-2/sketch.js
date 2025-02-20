let bubbles = [];
let numBubbles = 5; // Set the number of bubbles you want

function setup() {
  createCanvas(600, 400);
  
  for (let i = 0; i < numBubbles; i++) {
    bubbles.push(new Bubble());  // Add a new bubble to the array
  }
}

function draw() {
  background(0);

// loop through the bubbbbbbles
for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor() {
    this.x = random(width);  // Random x position
    this.y = random(height); // Random y position
  }
  
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke("blue");
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24); // Use `this` for current bubble's position
  }
}
