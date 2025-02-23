const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = [];
const gameState = {
    totalPairs: 8, // Updated to match selectedFaces count
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};
let cardback;
let cardFaceArray = [];

function preload() {
    cardback = loadImage('cardback.png', () => {
        console.log("Card back image loaded successfully");
    }, () => {
        console.error("Card back image failed to load");
    });

    cardFaceArray = [
        loadImage("20241025-R0000587.jpg"),
        loadImage("20241026-R0000650.jpg"),
        loadImage("20241026-R0000654.jpg"),
        loadImage("20241026-R0000758.jpg"),
        loadImage("20241029-R0000763.jpg"),
        loadImage("20241106-R0000879.jpg"),
        loadImage("20241106-R0000834.jpg"),
        loadImage("20241103-R0000773.jpg")
    ];
}

function setup() {
    createCanvas(675, 800);
    background("pink");

    let selectedFaces = [...cardFaceArray]; // Copy array to prevent modification
    let pairedFaces = [];

    for (let z = 0; z < 8; z++) { // num pairs
        const randomIndex = floor(random(selectedFaces.length));
        const face = selectedFaces[randomIndex];
        pairedFaces.push(face, face);
        selectedFaces.splice(randomIndex, 1);
    }

    pairedFaces = shuffleArray(pairedFaces);

    for (let j = 0; j < 4; j++) { // num rows
        for (let i = 0; i < 4; i++) {
            if (pairedFaces.length === 0) break; // Prevents extra cards if pairs are used up
            const faceImage = pairedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage));
            startingX += 120;
        }
        startingY += 150;
        startingX = 100;
    }
}

function draw() {
    background("pink"); // clears counter!
    for (let k = 0; k < cards.length; k++) {
        cards[k].show();
    }
    fill("blue");
    textSize(28);
    text('MEMORY GAME', 230, 60);

    fill("darkgreen");
    textSize(24);
    text(`Attempts: ${gameState.attempts}`, 490, 50);
    text(`Matches: ${gameState.numMatched}`, 490, 75);

    if (gameState.numMatched === gameState.totalPairs) {
        fill("yellow");
        textSize(66);
        textAlign(CENTER, CENTER);
        text("You win!!!!", width / 2, height / 2);
        noLoop();
    }

}

function mousePressed() {
    if (gameState.waiting) return;

    for (let k = 0; k < cards.length; k++) {
        if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log("Flipped", cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }

    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;

        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            gameState.flippedCards = [];
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            setTimeout(() => {
                gameState.flippedCards.forEach(card => card.flip());
                gameState.flippedCards = [];
                gameState.waiting = false;
                loop();
            }, 2000);
        }
    }
}

class Card {
    constructor(x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 100; // Ensure all cards are same size
        this.height = 140;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
    }

    show() {
        if (this.face === UP || this.isMatch) {
            image(this.cardFaceImg, this.x, this.y, this.width, this.height);
        } else {
            image(cardback, this.x, this.y, this.width, this.height);
        }
    }

    didHit(mx, my) {
        return mx >= this.x && mx <= this.x + this.width && my >= this.y && my <= this.y + this.height ? (this.flip(), true) : false;
    }

    flip() {
        if (!this.isMatch) {
            this.face = this.face === DOWN ? UP : DOWN;
        }
    }
}
// shuffles cards
function shuffleArray(array) {
    let counter = array.length;
    while (counter > 0) {
        const index = Math.floor(Math.random() * counter);
        counter--;
        [array[counter], array[index]] = [array[index], array[counter]];
    }
    return array;
}
