// Javascript debouce and thorttle interview questions IMP

const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debouceText = document.getElementById("debouce");
const thorttleText = document.getElementById("thorttle");

// input.addEventListener("input", (e) => {
//   defaultText.textContent = e.target.value;
//   updateDebouceText(e.target.value);
//   updateThorttleText(e.target.value);
// });

function poopityScoop() {
  window.ononline = (event) => {
    console.log("Back Online");
    let element = document.getElementById("message");
    element.classList.remove("warning");
    element.classList.add("info");
    element.textContent = "Back Online";
    setTimeout(() => {
      element.textContent = "";
      element.classList.remove("info");
    }, 2000);
  };

  window.onoffline = (event) => {
    console.log("Connection Lost");
    let element = document.getElementById("message");
    element.classList.add("warning");
    element.textContent = "Connection Lost";
  };
}
poopityScoop();
const updateDebouceText = debouce((text) => {
  //   debouceText.textContent = text;
  incrementCount(debouceText);
}, 100);

const updateThorttleText = thorttle((text) => {
  //   thorttleText.textContent = text;
  incrementCount(thorttleText);
}, 100);

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

document.addEventListener("mousemove", (e) => {
  incrementCount(defaultText);
  updateDebouceText();
  updateThorttleText();
});
function incrementCount(element) {
  element.textContent = (parseInt(element.innerText) || 0) + 1;
}
