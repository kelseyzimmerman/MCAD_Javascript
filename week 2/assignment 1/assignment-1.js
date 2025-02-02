
const questionsAndAnswers = [
  {question: "How far ahead is the future?",
    answer: "Two crying jags."
  },
  {question: "How shallow is the pass?",
  answer: "As the hill between the butcher's ribs."
  },
  {question: "How deep is the valley?",
    answer: "14 shades of blue."
  },
  {question: "How wide is the mountain?",
    answer: "As a fen, then a field, and a fen again."
  },
];

// display random question
console.log(questionsAndAnswers.length)
const randomNumber = Math.floor(Math.random() * questionsAndAnswers.length);

// define user answer
const userAnswer = window.prompt(questionsAndAnswers[randomNumber].question);

// Alert the user with their response and add correct answer
window.alert("You answered " + userAnswer + "! " + "The correct answer was " + questionsAndAnswers[randomNumber].answer)