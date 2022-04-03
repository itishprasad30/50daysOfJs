const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debouceText = document.getElementById("debouce");
const thorttle = document.getElementById("thorttle");

input.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value;
  updateDebouceText(e.target.value);
});

const updateDebouceText = debouce((text) => {
  debouceText.textContent = text;
}, 1000);

function debouce(cb, delay = 1000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
