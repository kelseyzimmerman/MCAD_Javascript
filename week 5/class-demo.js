// timers
// setTimeout - takes two arguments
// window.setTimeout(() => {
    //console.log("hello", new Date())
// }, 2000);
// second option
// setInterval - unlimited
/* let gray = 60;
const cancelButton = document.getElementById("cancelInterval");
const myInterval = window.setInterval(myIntervalFunction, 2000);
cancelButton.addEventListener("click", () => {
window.clearInterval(myIntervalFunction);
})
function myIntervalFunction () {
    if(gray < 255) {
        gray += 15;
    } else {
        gray = 0;
    }
    console.log("hello", new Date ())
}
window.setInterval(myIntervalFunction, 2000); */
// discuss classes and OOP
// classes have properties like objects do but use "this". blueprints on their own
// will be using in coordination with p5 using x and y coordinates
class RexRectangle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    draw() {
        fill(this.color);
        rect(this.x, this.y, 150, 150);
    }
    didHit(mouseX, mouseY) {
        if(mouseX >= this.x && 
            mouseX <= this.x + 150 && 
            mouseY >= this.y && 
            mouseY <= this.y + 150
        ) {
        console.log("hit")
    } else {
        console.log("missed")
    }
}



/* class Auto {
    constructor (model, color) {
        this.color = color;
        this.model = model;
    }

}
const myCar = new Auto("Honda", "red");
console.log(myCar); */
// using oclasses to abstract "objects"
let myRect = new RexRectangle(200, 100, "yellow");
function setup() {
    createCanvas(800, 600);
    background("#f1f1f1");
}
function draw() {
    myRect.draw();

}
function mousePressed() {
    myRect.didHit(mouseX, mouseY);
}
