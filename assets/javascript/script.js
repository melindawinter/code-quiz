//Declare variables
const startButton = document.getElementById("start-btn");
const questionContainerEl = document.getElementById("question-container");
const quizTimerEl = document.getElementById("timer");
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
