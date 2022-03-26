let wordList = ["apple", "horse", "music", "pintu", "water", "pizza"];
let randomIndex = Math.floor(Math.random() * wordList.length);
let secret = wordList[randomIndex];
let history = [];
let currentAttempt = "";
let counter = 0;

let grid = document.getElementById("grid");

buildGrid();
updateGrid();
window.addEventListener("keydown", handleKey);
function handleKey(e) {
  let keyLetter = e.key.toLowerCase();
  if (keyLetter === "enter") {
    //   todo
    if (currentAttempt.length < 5) {
      return;
    }
    if (!wordList.includes(currentAttempt)) {
      alert("Not in My dictnanory");
      return;
    }
    history.push(currentAttempt);
    currentAttempt = "";
  } else if (keyLetter === "backspace") {
    //   ...
    currentAttempt = currentAttempt.slice(0, currentAttempt.length - 1);
  } else if (/[a-z]/.test(keyLetter)) {
    if (currentAttempt.length < 5) {
      currentAttempt += keyLetter;
    }
  }
  updateGrid();
}

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

function updateGrid() {
  let row = grid.firstChild;
  for (let attempt of history) {
    drawAttempt(row, attempt, false);
    row = row.nextSibling;
  }
  drawAttempt(row, currentAttempt, true);
}

function drawAttempt(row, attempt, isCurrent) {
  for (let i = 0; i < 5; i++) {
    let cell = row.children[i];
    if (attempt[i] !== undefined) {
      cell.textContent = attempt[i];
    } else {
      cell.innerHTML = '<div style="opacity:0">x</div>';
    }
    if (isCurrent) {
      cell.style.backgroundColor = "";
    } else {
      cell.style.backgroundColor = getBgColor(attempt, i);
    }
  }
}

function getBgColor(attempt, i) {
  let currectLetter = secret[i];
  let attemptLetter = attempt[i];
  console.log(currectLetter, attemptLetter);

  if (attemptLetter === undefined || secret.indexOf(attemptLetter) === -1) {
    return "#3d4054";
  }

  if (currectLetter === attemptLetter) {
    return "#79b851";
  }
  return "#f3c237";
}
