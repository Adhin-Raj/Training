// Given a password string, check and print whether it is Weak, Medium, or Strong based on these rules:

// Weak → less than 6 characters

// Medium → at least 6 chars, includes either number or special character

// Strong → at least 8 chars, includes upper, lower, number, and special character

function passwordCheck(str) {
  if (
    typeof str === "object" ||
    typeof str === "boolean" ||
    typeof str === "function"
  ) {
    return "input shouldn't be object, function or boolean";
  }
  const password = String(str);
  const regexMedium = /^(?=.*[\d\a-zA-Z]).{6,}$/g;
  const regexStrong =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{8,}$/g;

  if (password.length >= 8 && regexStrong.test(password)) {
    return "Strong";
  } else if (password.length >= 6 && regexMedium.test(password)) {
    return `Medium`;
  } else {
    return `Weak`;
  }
}

function passwordCheckTest(array) {
  array.forEach((element) => {
    const result = passwordCheck(element[0]);
    console.log(result);
    if (result === element[1]) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });

  return "Completed...!";
}

console.log(
  passwordCheckTest([
    ["abcdef", "Medium"],
    ["131", "Weak"],
    ["pass981234", "Medium"],
    ["Password@1234#", "Strong"],
    [[], "Weak"],
    [{}, "input shouldn't be object, function or boolean"],
    [true, "input shouldn't be object, function or boolean"],
    ["Walter@1234#", "Strong"],
    ["@#$", "Weak"],
    ["Demon@7829!@", "Strong"],
    ["12345", "Weak"],
    ["jasse123", "Medium"],
    [(item) => item + item, "input shouldn't be object, function or boolean"],
    [["hello"], "input shouldn't be object, function or boolean"],
    ["ItIsAStrongPassword@#$123456!@$", "Strong"],
  ])
);
