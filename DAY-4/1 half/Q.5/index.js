// 5. Write a function to convert text from camelCase to kebab-case.

function coverToKebabCase(str) {
  const regEx = /[A-Z]/g;
  const capitalLetters = str.match(regEx);
  let kebabCase = "";
  for (const letter of capitalLetters) {
    kebabCase = str.replace(letter, `-${letter.toLowerCase()}`);
    str = kebabCase;
  }

  return str;
}

console.log(coverToKebabCase("myFunction"));
