//Declare variables
var startButton = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("question-container");
var quizTimerEl = document.getElementById("timer");
var questionEl = document.getElementById("question-text");
var answersEl = document.getElementById("answer-choices");
var questions = [
  {
    question: "Which of these is an accurate description of JavaScript?",
    choices: [
      "A delicious coffee drink",
      "A computer programming language used to create interactive effects in web browsers",
      "A language used to define color, fonts, text alignment, borders, and other stylistic elements",
      "A computer language indistinguishable from Java",
    ],
    answer:
      "A computer programming language used to create interactive effects in web browsers",
  },

  {
    question: "Which HTML tag is used to embed JavaScript?",
    choices: ["<script>", "<java>", "<barista>", "<js>"],
    answer: "<script>",
  },
  {
    question: "How would you write the message 'I love cats' in an alert box?",
    choices: [
      "prompt('I love cats');",
      "fancybox('I love cats');",
      "alert('I love cats');",
      "espresso('I love cats');",
    ],
    answer: "alert('I love cats');",
  },
  {
    question: "Which of these is a proper way to create a function?",
    choices: [
      "console.log('thisFunction')",
      "alert(function)",
      "function:thisFunction",
      "function thisFunction()",
    ],
    answer: "function thisFunction()",
  },
  {
    question: "How do you write a single line comment in JavaScript?",
    choices: [
      "Yell at your computer",
      "//Write a comment",
      "<!--Write a comment-->",
      "Append a Notes page",
    ],
    answer: "//Write a comment",
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
  showQuestion();
}

// Set next question

function showQuestion() {
  for (var i = 0; i > questions.length; i++) {
    questionEl.textContent = questions.question;
  }
}

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
  quizTimerEl.textContent = "Time's Up!";
}

setTime();
