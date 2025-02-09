let questionFont;
let responseFont;
let titleFont;
let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let statements = [
  // adapted from: https://news.asu.edu/content/sample-jeopardy-questions
  {question: 'On Sept. 1, 1715 Louis XIV died in this city, site of a fabulous palace he built.', answer: 'Versailles'},
  {question: "Around 1542 explorer Juan Rodriguez Cabrillo discovered this island off L.A. & it's believed he's buried there too.", answer: 'Catalina'},
  {question: '"Hard times," indeed! A giant quake struck New Madrid, Mo., on Feb. 7, 1812, the day this author struck England.', answer: 'Charles Dickens'},
  {question: 'According to C.S. Lewis, it was bordered on the east by the Eastern Ocean and on the north by the River Shribble.', answer: 'Narnia'},
  {question: "Arizona's motto, ditat deus, means he 'enriches'.", answer: 'God'},
  {question: "Pseudonym of labor activist & magazine namesake Mary Harris Jones.", answer: 'Mother Jones'},

];
function next(){
  if(statements.length <1) {
    window.alert('you won');
  }
  const randomIndex = Math.ceil(Math.random() * statements.length - 1);
  return statements[randomIndex];
}

function checkQuestion() {
  // this function is checking if answer is the same
  if (currentQuestion.answer === questionInput.value()) {
    // remove correct answer from array
    statements = statements.filter(statementObj => { // filter loops through all statements and checks for criteria
      return currentQuestion.answer !== statementObj.answer;
    });
    response = 'Correct! Next Question:';
    responseColor = "orange";
  } else {
    response = "I'm sorry, back to the drawing board.";
    responseColor = "black";
  }
  // create new answer
  currentQuestion = next();
  questionInput.value('');
  if(currentQuestion) {
    message = currentQuestion.question || '';}
}

currentQuestion = next();
// returns random question
let message = currentQuestion.question;

function setup() {
  createCanvas(800, 600);
  heading = createElement('h1', ['Jeopardy!']);
  heading.position(100,100);
  let heading2 = createElement('h3', ['Responses should begin with capital letters.']);
  heading2.position(100, 150);
  questionInput = createInput('');
  questionInput.size(100, 24);
  questionInput.position(100, 375);
  submitAnswerButton = createButton('Who/What is...');
  submitAnswerButton.mousePressed(checkQuestion);
  submitAnswerButton.position(100, 420);
  submitAnswerButton.size(140, 24);


}
function draw() {
  background("antiquewhite");
  fill('purple');
  textFont('Roboto Mono');
  textSize(24);
  text(message, 100, 220, 600);
  fill(responseColor);
  text(response, 100, 350);
}
