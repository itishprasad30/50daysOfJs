let grid = document.getElementById("grid");

let wordList = [
  // "apple",
  "horse",
  // "music",
  // "pintu"
];

let randomIndex = Math.floor(Math.random() * wordList.length);
let secret = wordList[randomIndex];

let attempts = ["rohan"];
let currentAttempt = "";

function buildGrid() {
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("div");
    for (let j = 0; j < 5; j++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      cell.textContent = "";
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }
}

buildGrid();

let counter = 0;
updateGrid();

function updateGrid() {
  let row = grid.firstChild;
  for (let attempt of attempts) {
    drawPastAttempt(row, attempt);
    row = row.nextSibling;
  }
  drawCurrentAttmpt(row, currentAttempt);
}

function drawPastAttempt(row, attempt) {
  for (let i = 0; i < 5; i++) {
    let cell = row.children[i];
    cell.textContent = attempt[i];
    cell.style.backgroundColor = getBgColor(attempt, i);
  }
}

function drawCurrentAttmpt(row, attempt) {
  for (let i = 0; i < 5; i++) {
    let cell = row.children[i];
    cell.textContent = attempt[i] ?? "";
  }
}

function getBgColor(attempt, i) {
  let currectLetter = secret[i];
  let attemptLetter = attempt[i];
  console.log(currectLetter, attemptLetter);

  if (!secret.indexOf(attemptLetter) == -1) {
    return "darkgray";
  }

  if (currectLetter === attemptLetter) {
    return "green";
  }
  return "yellow";
}
