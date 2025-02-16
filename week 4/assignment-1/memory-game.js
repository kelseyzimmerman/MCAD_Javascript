let startingX = 200;
let startingY = 100;
let myRects = [];
let startingId = 0;
function setup () {
    createCanvas(1000, 800);
    background(0);
    // for (let l = 0; l < 6; l++) {
    for (let k = 0; k < 4; k++) {
      for (let i = 0; i < 4; i++) {
          rect(startingX, startingY, 100, 100);
            myRects.push({ x: startingX, y: startingY, id: startingId });
            startingX += 150;
            startingId++;
        }
        startingY += 150;
        startingX = 200;
    }
    
    console.log(myRects);
}
