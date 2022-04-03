const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debouceText = document.getElementById("debouce");
const thorttleText = document.getElementById("thorttle");

input.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value;
  updateDebouceText(e.target.value);
  updateThorttleText(e.target.value);
});

const updateDebouceText = debouce((text) => {
  debouceText.textContent = text;
});

const updateThorttleText = thorttle((text) => {
  thorttleText.textContent = text;
});

function debouce(cb, delay = 1000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

function thorttle(cb, delay = 1000) {
  let shouldWait = false;
  let waitingArgs;

  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;

    // setTimeout(() => {
    //   if (waitingArgs == null) {
    //     shouldWait = false;
    //   } else {
    //     cb(...waitingArgs);
    //     waitingArgs = null;
    //   }
    // }, delay);
    setTimeout(timeoutFunc, delay);
  };
}
