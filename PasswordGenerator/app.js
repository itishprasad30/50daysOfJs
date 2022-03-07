const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const symbols = ["@", "*", "#", "%", "$"];

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
  console.log(availableCharacters);
};

generatePassword(10, true, true, true, true);
