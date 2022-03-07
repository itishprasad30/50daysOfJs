const characterAmountRange = document.getElementById("CharAmountRange");
const characterAmountNumber = document.getElementById("CharAmountNumber");
const lowrerCaseElement = document.getElementById("lowerCase");
const upperCaseElement = document.getElementById("upperCase");
const numberElement = document.getElementById("number");
const symbolElement = document.getElementById("symbol");
const passwordDisplayElement = document.getElementById("passwordDisplay");

const form = document.getElementById("passwordGeneratorForm");

characterAmountNumber.addEventListener("input", syncCharAmount);
characterAmountRange.addEventListener("input", syncCharAmount);

function syncCharAmount(e) {
  const value = e.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const characterAmount = characterAmountNumber.value;
  const includeLowerCase = lowrerCaseElement.checked;
  const includeUpperCase = upperCaseElement.checked;
  const includeNumber = numberElement.checked;
  const includeSymbol = symbolElement.checked;
  const password = generatePassword(
    characterAmount,
    includeNumber,
    includeSymbol,
    includeLowerCase,
    includeUpperCase
  );
  passwordDisplayElement.innerHTML = password;
});

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ["_", "*", "#", "%", "$"];

const characterCodes = Array.from(Array(26)).map((_, i) => i + 97);
// console.log(characterCodes);
const lowerCaseLetters = characterCodes.map((code, i) =>
  String.fromCharCode(code)
);

// console.log(lowerCaseLetters);

const upperCaseLetters = lowerCaseLetters.map((letter) => letter.toUpperCase());

// console.log(upperCaseLetters);

const generatePassword = (
  length,
  hasNumbers,
  hasSymbols,
  hasLowerCase,
  hasUpperCase
) => {
  const availableCharacters = [
    ...(hasSymbols ? symbols : []),
    ...(hasNumbers ? numbers : []),
    ...(hasLowerCase ? lowerCaseLetters : []),
    ...(hasUpperCase ? upperCaseLetters : []),
  ];
  //   console.log(availableCharacters);
  let password = "";
  if (availableCharacters.length === 0) return "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableCharacters.length);
    password += availableCharacters[randomIndex];
  }
  // console.log(password);
  return password;
};

// const result = generatePassword(10, true, true, true, true);
// console.log(result);
