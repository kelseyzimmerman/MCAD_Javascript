// control or command + slash comments code
// oh there is going to be a quiz interesting
/* this is a multi-line comment
that allows you to keep going on a comment
as long as you want, neat-o!*/
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

const name = "Kelsey"; // can use single or double quotes; string
let age = 21; // number
var isLying = true; // boolean

// arrays are lists!
// how to make an array
let cars = ["Prius", "Camry", "Rav-4", "Fit"];
let luckyNumbers = [7, 13, 22];
let comboArray = [7, "Prius", true];
let myOtherArray = new Array();
myOtherArray[0] = "Bob";
// can even have an array of arrays. Think of arrays as buckets.
cars[2] = "Jaguar"; // would change array! aka reassign
console.log("a single car", cars[0]); // returns "a single car Prius"
// list the var name and then the index
// index starts at 0 for the first item
// how to manipulate data in arrays
// push to add to the end of an array
cars.push("Kia");
console.log("cars", cars);
// can do the opposite to remove using pop
// pop will remove the renamed option
const lastItem = cars.pop();
console.log("after pop", cars);
console.log("last item", lastItem);
// length is a property of an array
// shift removes first element and returns it
cars.shift();
console.log("cars after shift", cars);
console.log("I have " + cars.length + " cars");
console.log(cars[cars.length-1]) // this shows us the last car. little trick
// slice - does not inherently change array, but can make array selection with it
cars.push("Fiat");
cars.push("Jeep");
cars.push("Chrysler");
const subArray = cars.slice(2);
console.log("cars after slice", subArray);
// splice
cars.splice(2, 3); // can also do negative numbers
console.log("cars after splice", cars);
// array functions make life super simple, but will hold off on that for now
// map, find, filter

// Objects: 
// You can access info inside an array with a number, but otherwise objects are the key
const myObject = {color: "red", // color is property, red is value
  wheels: 4,
  engine: "gas",
  bodyType: "sedan",
  make: "Honda",
  model: "Accord",
}
const myClass = {language: "Javascript",
  college: "MCAD",
  meetingNight: "Tuesday",
  instructor: "Korth",
  students: ["Brian", "Tess", "Kelsey", "Arden", "Luke"]
}
myClass.meetingNight = "Wednesday";
myClass["language"] = "Typescript";
myClass.students.push("Makayla");
console.log("my class", myClass);

// key-value pairs like dictionaries in Python
// object describes something - can refer to keys as properties
// can also combine properties and arrays
// can get rid of properties using delete
delete myClass.language;
console.log("my class after delete", myClass)
// can also put objects inside of arrays
const questionsAndAnswers = [
  {question: "what is a bird?",
    answer: "an animal that flies"
  },
  {question: "where is north?",
  answer: "up"
},
  {question: "how do we make green?",
    answer: "blue and yellow"
  },
];
console.log("2nd question.", questionsAndAnswers[1].question)
const northQuestion = window.prompt(questionsAndAnswers[1].question);
console.log("north question", northQuestion)
if(northQuestion === questionsAndAnswers[1].answer){
  window.alert("correct!!!!");
} else {
  window.alert("no :((((")
}
// and now... MATH 
// Math.random
// bad idea to do this sort of thing: magic number const arrayLength = 4;
console.log(Math.floor(Math.random() * 4)); // floor rounds down
const randomNumber = Math.floor(Math.random() * questionsAndAnswers.length);
const answer = window.prompt(questionsAndAnswers[randomNumber].question);
if(answer.toLowerCase() === questionsAndAnswers[randomNumber].answer.toLowerCase()) {
  window.alert("correctamundo!");
}  else {
    window. alert("Incorrect")
  }