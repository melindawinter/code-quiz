//Declare variables
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");
var userFeedback = document.getElementById("feedback");
var quizTimerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var formEl = document.getElementById("form");
var initialsEl = document.getElementById("user-initials");
var submitButton = document.getElementById("submit");
var shuffledQuestions, currentQuestionIndex;
var score = 0;
var secondsLeft = 10;

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
  setTime();
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
    } else {
      button.dataset.correct;
    }
    //Event listener for user selecting an answer
    button.addEventListener("click", selectAnswer);
    answerButtonsEl.appendChild(button);
  });
}

//Reset for next question
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
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  //What will happen for correct and incorrect answers
  if (correct) {
    score++;
    $("#score").text("Score: " + score);
    $("#feedback").text("You are correct!");
  } else {
    $("#score").text("Score: " + score);
    secondsLeft = secondsLeft - 10;
    $("#feedback").text("Sorry, you are incorrect.");
  }
  Array.from(answerButtonsEl.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  //What happens during the duration of the quiz
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
    userFeedback.classList.remove("hide");
    //What happens when all of the questions have been answered
  } else if (
    shuffledQuestions.length > currentQuestionIndex + 1 &&
    secondsLeft <= 0
  ) {
    endQuiz();
  } else {
    userFeedback.classList.remove("hide");
    secondsLeft = 10;
    questionContainerEl.classList.add("hide");
    nextButton.classList.add("hide");
    userFeedback.classList.add("hide");
    endQuiz();
  }
}

function endQuiz() {
  quizTimerEl.classList.add("hide");
  getInitials();
}

// getInitials();
function getInitials() {
  formEl.classList.remove("hide");
  initialsEl.classList.remove("hide");
  submitButton.classList.remove("hide");
}
//This creates the style for correct and incorrect answers
function setStatusClass(element, correct) {
  clearStatusClass(element);

  if (correct) {
    element.classList.add("right");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("right");
  element.classList.remove("wrong");
}

//Functions to make the timer work

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    quizTimerEl.textContent = secondsLeft + " seconds left!";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      timesUp();
    }
  }, 1000);
}

function timesUp() {
  quizTimerEl.textContent = "Time's Up!";
  userFeedback.classList.remove("hide");
  questionContainerEl.classList.add("hide");

  nextButton.classList.add("hide");
  userFeedback.classList.add("hide");
}

// function printScores() {
// $("#scores").append("Final Score: " + score);}
