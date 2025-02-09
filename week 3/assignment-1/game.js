let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let statements = [
  {question: 'what color do you get when?', answer: 'none'},
  {question: 'how far from the truth is?', answer: 'always'},
  {question: 'where is your family?', answer: 'in the dark'},
  {question: 'The darkest color is?'}

];
function next(){
  if(statements.length <1) {
    alert('you won');
    noLoop();
    return null;
  }
  const randomIndex = Math.ceil(Math.random() * statements.length - 1);
  return statements[randomIndex];
}
function checkQuestion() {
  // this function is checking if answer is the same
  if (currentQuestion.answer === questionInput.value()) {
    // remove correct answer from array
    statements = statements.filter(statementObj => { // filter loops through all statements and checks for criteria
      return currentQuestion.answer !== statementObj.answer
    });
    response = 'Correct! Next Question';
    responseColor = "orange";
  } else {
    response = "LOL nope!";
    responseColor = "black";
  }
  // create new answer
  currentQuestion = next();
  questionInput.value(' ');
  if(currentQuestion) {
    message = currentQuestion.question || '';}
}
currentQuestion = next();
// returns random question
let message = currentQuestion.question;

function setup() {
  createCanvas(800, 600);
  heading = createElement('h1', ['The Truth Quiz']);
  heading.position(100,100);
  questionInput = createInput('');
  questionInput.size(100, 24);
  questionInput.position(100, 220);
  submitAnswerButton = createButton('Visit the dark side');
  submitAnswerButton.mousePressed(checkQuestion);
  submitAnswerButton.position(100, 275);
  submitAnswerButton.size(140, 24);

}
function draw() {
  background("antiquewhite");
  fill('purple');
  textSize(24);
  text(message, 100, 200);
  fill(responseColor);
  text(response, 100, 350);
}
