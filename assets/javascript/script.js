//Declare variables
var startButton = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("question-container");
var quizTimerEl = document.getElementById("timer");
var questions = [
  {
    question: "Which of these is an accurate description of JavaScript?",
    answerChoices: [
      { text: "A delicious coffee drink", correct: false },
      {
        text:
          "A computer programming language used to create interactive effects in web browsers",
        correct: true,
      },
      {
        text:
          "A language used to define color, fonts, text alignment, borders, and other stylistic elements",
        correct: false,
      },
      {
        text: "A computer language indistinguishable from Java",
        correct: false,
      },
    ],
  },
  {
    question: "Which HTML tag is used to embed JavaScript?",
    answerChoices: [
      { text: "<script>", correct: true },
      { text: "<java>", correct: false },
      { text: "<barista>", correct: false },
      { text: "<js>", correct: false },
    ],
  },
  {
    question: "How would you write the message 'I love cats' in an alert box?",
    answerChoices: [
      { text: "prompt('I love cats');", correct: false },
      { text: "fancybox('I love cats');", correct: false },
      { text: "alert('I love cats');", correct: true },
      { text: "espresso('I love cats');", correct: false },
    ],
  },
  {
    question: "Which of these is a proper way to create a function?",
    answerChoices: [
      { text: "console.log('thisFunction')", correct: false },
      { text: "alert(function)", correct: false },
      { text: "function:thisFunction", correct: false },
      { text: "function thisFunction()", correct: true },
    ],
  },
  {
    question: "How do you write a single line comment in JavaScript?",
    answerChoices: [
      { text: "Yell at your computer", correct: false },
      { text: "//Write a comment", correct: true },
      { text: "<!--Write a comment-->", correct: false },
      { text: "Append a Notes page", correct: false },
    ],
  },
];

//Event listener for Start button
startButton.addEventListener("click", startQuiz);

//Function for starting quiz
function startQuiz() {
  console.log("started");
  startButton.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  quizTimerEl.classList.remove("hide");
  setNextQuestion();
}

// Set next question

//function nextQuestion() {}

// Select answer

//function selectAnswer() {}

//Timer
var timeEl = document.querySelector("#time");

var secondsLeft = 76;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    quizTimerEl.textContent = secondsLeft + " seconds left!";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "Time's Up!";
}

setTime();
