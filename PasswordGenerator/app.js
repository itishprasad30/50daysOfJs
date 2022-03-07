const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
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
  //   console.log(availableCharacters);
  let password = "";
  if (availableCharacters.length === 0) return "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableCharacters.length);
    password += availableCharacters[randomIndex];
  }
  return password;
};

const result = generatePassword(10, true, true, true, true);
console.log(result);
