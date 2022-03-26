console.log("hello");

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
  // seting inital content to ' '
  quoteDisplayEl.textContent = "";
  //splitting the quote into characters
  //   and assging into a span element
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
}

//  Calculating WPM and render it
function setWAP() {
  lastTime = parseInt(timerEl.textContent, 10) / 60;
  const wpm = Math.floor(textContent / 5 / lastTime);
  wpmEl.textContent = wpm.toString(10);
}

quoteInputEl.addEventListener("input", () => {
  if (firstTime) {
    startTimer();
    firstTime = false;
  }
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

renderNewQuote();
