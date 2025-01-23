// comment!
// variables
// to make a variable: use the word let. LET is for variables that will change
// let myName = "Kelsey"; //defined
// myName = "Kels"; // reassigned

// const lastName = "Korth"; // const for vars that DON'T change
// third and oldest way
// var oldSchoolVariable = "Howdy";
// window.alert(lastName); 
//commands have at least two parts -- the command itself -- 
// and the parentheses that accept any sort of information
// console.log(oldSchoolVariable + " " + myName);
// console.log(`${oldSchoolVariable} ${myName}`); //template stream
// string -- characters between quotes
// let myNumber = 16;
// console.log(myNumber + 8);
// let amIFunny = false;
// console.log(amIFunny + myNumber); // this came out as a number
// console.log(myName + myNumber);
// boolean -- true or false
// chrome console -- command + option +j on mac
//pc chrome console F12

// conditions
//if condition
// keyword "if" + parentheses with condition + curly brackets with what
//to do if it is true
// three equal signs is strict equal - same value, same data type
// two equal signs is loose equal - calculate to same value. Don't use this
// if(myNumber === 16) { 
//     console.log("it is 16");
// }
// if(myNumber > 10) {
//     console.log("bigger than 10")
// } else if (myName === "Kelsey") {
//     console.log("name is Kels but not less than 10");
// } else {
//     console.log("less than 10")
// }
// // convention is for everything in curly brackets to be tagged
// const favColor = window.prompt("What is your favorite color?");
// if(favColor !== "black") {
//     window.alert("too bad, mine is black");
// } else {
//     window.alert("black is the coolest")
// }
let circleX = 0;
function setup() {
    createCanvas(400, 400);
}
//creating a canvas that's 400px by 400px
function draw() {
    background(220);
    fill("purple"); // can change to a variable
    circle(circleX, 200, 50);
    if(circleX < 400) {
        circleX = circleX + 10;
    
    } else {
        circleX = 0
    }

    circleX = circleX + 1 //holy shit this makes animation
}