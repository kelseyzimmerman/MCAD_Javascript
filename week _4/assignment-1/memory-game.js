//let myCard;
const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = [];
const gameState = {
};
let cardBack;
function preload() {
    cardBack = loadImage('/Users/kelseyzimmerman/Documents/MCAD_Javascript/week _4/assignment-1/memory_game.png');
    console.log("Image loaded", cardBack);
}
    function setup () {
        createCanvas(800, 800);
        background("pink");
        //myCard = new Card();
        for (let j = 0; j < 4; j++) { // num rows
            for (let i = 0; i < 4; i++) {
                cards.push(new Card(startingX, startingY));
                startingX += 120;
            }
            startingY += 150;
            startingX = 100;
        }
    }     

function mousePressed () {
    for (let k = 0; k < cards.length; k++) {
        if(cards[k].didHit(mouseX, mouseY)) {
            console.log("flipped");
        }
    }
    console.log(myCard.didHit(mouseX, mouseY));
}

class Card {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 100;
        this.face = DOWN;
        this.show();
    }
    show () {
        if(this.face === DOWN) {
            fill("orange");
            rect(this.x, this.y, this.width, this.height, 10);
            image(cardBack, this.x, this.y);
    } else {
        fill("#aaa");
        rect(this.x, this.y, this.width, this.height, 10);
    }
}

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            this.flip();
            return true;
            } else {
                return false;
            }
        }

    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}
    // myCard.show();
    // for (let l = 0; l < 6; l++) {
 /*    for (let k = 0; k < 4; k++) {
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
} */