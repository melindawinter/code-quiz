var userInput = document.querySelector("#user-text");
var userForm = document.querySelector("#user-form");
var userList = document.querySelector("#user-list");

var userScores = [];

init();

function renderScores() {
  // Clear userList element
  userList.innerHTML = "";

  // Render a new li for each input
  for (var i = 0; i < userScores.length; i++) {
    var user = userScores[i];

    var li = document.createElement("li");
    li.textContent = user;
    li.setAttribute("data-index", i);

    userList.appendChild(li);
  }
}

function init() {
  // Get stored info from localStorage
  // Parsing the JSON string to an object
  var storedScores = JSON.parse(localStorage.getItem("userScores"));

  // If info was retrieved from localStorage, update the array to it
  if (storedScores !== null) {
    userScores = storedScores;
  }

  // Render scores to the DOM
  renderScores();
}

function storeScores() {
  // Stringify and set "userScores" key in localStorage to array
  localStorage.setItem("userScores", JSON.stringify(userScores));
}

// When form is submitted...
userForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var userText = userInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (userText === "") {
    return;
  }

  // Add new input to array, clear the input
  userScores.push(userText);
  userInput.value = "";

  // Store updated info in localStorage, re-render the list
  storeScores();
  renderScores();
});
