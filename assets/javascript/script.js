// things to fix: correct answer and score issue, stop quiz at 0 sec, on clicking the restart button restart timer and score, have scores print and save to scores page

//Declare variables
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var scoresButton = document.getElementById("scores-btn");
var questionContainerEl = document.getElementById("question-container");
var userFeedback = document.getElementById("feedback");
var quizTimerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var shuffledQuestions, currentQuestionIndex;
var score = 0;

//Questions and answers array
var questions = [
  {
    question: "Which of these is an accurate description of JavaScript?",
    answers: [
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
    answers: [
      { text: "<java>", correct: false },
      { text: "<barista>", correct: false },
      { text: "<js>", correct: false },
      { text: "<script>", correct: true },
    ],
  },
  {
    question: "How would you write the message 'I love cats' in an alert box?",
    answers: [
      { text: "prompt('I love cats');", correct: false },
      { text: "fancybox('I love cats');", correct: false },
      { text: "alert('I love cats');", correct: true },
      { text: "espresso('I love cats');", correct: false },
    ],
  },
  {
    question: "Which of these is a proper way to create a function?",
    answers: [
      { text: "console.log('thisFunction')", correct: false },
      { text: "alert(function)", correct: false },
      { text: "function:thisFunction", correct: false },
      { text: "function thisFunction()", correct: true },
    ],
  },
  {
    question: "How do you write a single line comment in JavaScript?",
    answers: [
      { text: "Yell at your computer", correct: false },
      { text: "//Write a comment", correct: true },
      { text: "<!--Write a comment-->", correct: false },
      { text: "Append a Notes page", correct: false },
    ],
  },
];

//Event listener for Start button
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

//Function for starting quiz
function startQuiz() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerEl.classList.remove("hide");
  quizTimerEl.classList.remove("hide");
  setNextQuestion();
}

// Randomly select next question
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

//Display the question and answer choices
function showQuestion(question) {
  questionEl.innerText = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsEl.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide");
  userFeedback.classList.add("hide");
  while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild(answerButtonsEl.firstChild);
  }
}

// Select answer
function selectAnswer(e) {
  var selectedButton = e.target;
  if (correct === true) {
    score++;
    $("#feedback").text("You are correct!");
  } else {
    score--;
    $("#score").text("Score: " + score);
    secondsLeft = secondsLeft - 5;
    $("#feedback").text("Sorry, you are incorrect.");
  }

  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);

  Array.from(answerButtonsEl.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
    userFeedback.classList.remove("hide");
  } else {
    scoresButton.classList.remove("hide");
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
    userFeedback.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);

  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

//Timer
var timeEl = document.querySelector("#time");

var secondsLeft = 76;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    quizTimerEl.textContent = secondsLeft + " seconds left!";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  quizTimerEl.textContent = "Time's Up!";
}

setTime();
