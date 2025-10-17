// 7. Write a function to convert text from camelCase to snake_case.

function coverSnakeCase(str) {
  const regEx = /[A-Z]/g;
  const capitalLetters = str.match(regEx);
  let newStr = "";
  for (let i = 0; i < capitalLetters.length; i++) {
    newStr = str.replace(
      capitalLetters[i],
      `_${capitalLetters[i].toLowerCase()}`
    );
    str = newStr;
  }

  return newStr;
}

console.log(coverSnakeCase("myFunction"));
console.log(coverSnakeCase("camelCase"));

