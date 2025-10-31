// 7. Write a function to convert text from camelCase to snake_case.

function coverSnakeCase(str) {
  if (typeof str !== "string") {
    return "input should be string";
  }
  const regEx = /[A-Z]/g;
  const capitalLetters = str.match(regEx);
  if (capitalLetters === null) return "input string is not in camelCase";
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

function snakeCaseTest(array) {
  array.forEach((element) => {
    const result = coverSnakeCase(element[0]);
    console.log(result)
    if (result === element[1]) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });

  return "Completed...!";
}

console.log(
  snakeCaseTest([
    ["myFunction", "my_function"],
    ["camelCase", "camel_case"],
    ["welcomeToTheWorldOfProgramming", "welcome_to_the_world_of_programming"],
    ["123", "input string is not in camelCase"],
    [true, "input should be string"],
    [() => console.log("stringAccepted"), "input should be string"],
    [{ a: "apple" }, "input should be string"],
    ["123Benz", "123_benz"],
    ["$mySoldiersPushForward$", "$my_soldiers_push_forward$"],
    [[],"input should be string"],
    [['myFunction'],"input should be string"],
    [NaN,"input should be string"],
    ["employeeManagerApp","employee_manager-app"],
    [""]
  ])
);
