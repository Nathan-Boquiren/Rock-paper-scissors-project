//Accessing HTML elements
const choicesContainer = document.getElementById("choices-container");
const userRockBtn = document.getElementById("rock");
const userPaperBtn = document.getElementById("paper");
const userScissorsBtn = document.getElementById("scissors");

const computerChoiceContainer = document.getElementById("computer-choice");
const winLoseStatus = document.getElementById("win-lose-status");

//Generate computer choice
const rock = "\u{1FAA8}";
const paper = "\u{1F4C4}";
const scissors = "\u2702";

let choices = [rock, paper, scissors];

function generateComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

//win, lose, tie functions

function lose() {
  winLoseStatus.innerHTML = `<p>You Lost!</p>`;
  winLoseStatus.style.color = "rgb(255, 0, 0)";
}

function win() {
  winLoseStatus.innerHTML = `<p>You Won!</p>`;
  winLoseStatus.style.color = "rgb(26, 158, 0)";
}

function tie() {
  winLoseStatus.innerHTML = `<p>You tied!</p>`;
  winLoseStatus.style.color = "black";
}

//Click events for user choice buttons

userRockBtn.addEventListener("click", () => {
  let computerChoice = generateComputerChoice(choices);
  if (computerChoice === paper) {
    lose();
  } else if (computerChoice === scissors) {
    win();
  } else {
    tie();
  }
  computerChoiceContainer.innerHTML = `<p>The computer chose <span>${computerChoice}</span></p>`;
});

userPaperBtn.addEventListener("click", () => {
  let computerChoice = generateComputerChoice(choices);
  if (computerChoice === scissors) {
    lose();
  } else if (computerChoice === rock) {
    win();
  } else {
    tie();
  }
  computerChoiceContainer.innerHTML = `<p>The computer chose <span>${computerChoice}</span></p>`;
});

userScissorsBtn.addEventListener("click", () => {
  let computerChoice = generateComputerChoice(choices);
  if (computerChoice === rock) {
    lose();
  } else if (computerChoice === paper) {
    win();
  } else {
    tie();
  }
  computerChoiceContainer.innerHTML = `<p>The computer chose <span>${computerChoice}</span></p>`;
});
