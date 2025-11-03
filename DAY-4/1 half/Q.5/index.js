// 5. Write a function to convert text from camelCase to kebab-case.

function convertToKebabCase(str) {
  if (typeof str !== "string") {
    return "input should be string";
  }
  const regEx = /[A-Z]/g;
  const capitalLetters = str.match(regEx);

  if (capitalLetters === null) return "input string is not in camelCase";
  let kebabCase = "";
  for (const letter of capitalLetters) {
    kebabCase = str.replace(letter, `-${letter.toLowerCase()}`);
    str = kebabCase;
  }

  return str;
}

function convertToKebabCaseTest(array) {
  array.forEach((element) => {
    const result = convertToKebabCase(element[0]);
    if (result === element[1]) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });

  return "Completed...!";
}

console.log(
  convertToKebabCaseTest([
    ["myFunction", "my-function"],
    ["camelCase", "camel-case"],
    ["welcomeToTheWorldOfProgramming", "welcome-to-the-world-of-programming"],
    ["123", "input string is not in camelCase"],
    [true, "input should be string"],
    [() => console.log("stringAccepted"), "input should be string"],
    [{ a: "apple" }, "input should be string"],
    ["123Benz", "123-benz"],
    ["$mySoldiersPushForward$", "$my-soldiers-push-forward$"],
    [[], "input should be string"],
    [["myFunction"], "input should be string"],
    [NaN, "input should be string"],
    ["employeeManagerApp", "employee-manager-app"],
    ["", "input string is not in camelCase"],
  ])
);
