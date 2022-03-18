const quoteApiUrl = `https://api.quotable.io/random?minLength=200`;
const quoteDisplayEl = document.getElementById("quote-display");
const quoteInputEl = document.getElementById("quoteInput");
const timerEl = document.getElementById("timer");
const wpmEl = document.getElementById("wpm");

let correct;
let firstTime = true;
let lastTime = 0;
let textLength;

async function getRandomQuote() {
  try {
    response = await fetch(quoteApiUrl);
    data = await response.json();
    textLength = data.length;
    return data.content;
  } catch (e) {
    console.log(e);
  }
}

async function renderNewQuote() {
  const quote = await getRandomQuote();
  quoteDisplayEl.textContent = "";

  // Splitting quote into characters
  quote.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.textContent = character;
    quoteDisplayEl.appendChild(characterSpan);
  });
  quoteInputEl.value = null;
  if (!firstTime) {
    setWPM();
  }
  timerEl.textContent = "Start Typing!";
  clearInterval(counting);

  firstTime = true;
}

// Calculate WPM and render it
function setWPM() {
  lastTime = parseInt(timerEl.textContent, 10) / 60;
  const wpm = Math.floor(textLength / 5 / lastTime);
  wpmEl.textContent = wpm.toString(10);
}

quoteInputEl.addEventListener("input", () => {
  if (firstTime) {
    startTimer();
    firstTime = false;
  }
  const arrayQuote = quoteDisplayEl.querySelectorAll("span");
  const arrayValue = quoteInputEl.value.split("");

  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index];
    if (character == null) {
      characterSpan.classList.remove("incorrect");
      characterSpan.classList.remove("correct");
      correct = false;
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
      correct = true;
    } else {
      characterSpan.classList.add("incorrect");
      characterSpan.classList.remove("correct");
      correct = false;
    }
  });

  if (correct) renderNewQuote();
});

let startTime;
let counting;
function startTimer() {
  timerEl.textContent = 0;
  startTime = new Date();
  counting = setInterval(() => {
    timerEl.textContent = getTimerTime();
  }, 1000);
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000);
}

// On Load
renderNewQuote();
