// 8. Write a program that finds the missing number in an array containing consecutive integers from 1 to n, with one number missing.

function missingInteger(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "input should be number";
    }
  }

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] <= 0) return "input should be positive number only";

    if (arr[i - 1] !== i) {
      return i;
    }
  }
  return `no number is missing`;
}

function missingIntegerTest(array) {
  array.forEach((element) => {
    const result = missingInteger(element[0]);
    if (result === element[1]) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });

  return "Completed...!";
}

console.log(
  missingIntegerTest([
    [[2, 3, 4, 5, 6], 1],
    [[1, 2, 3, 5, 6], 4],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13], 12],
    [["1", "2", "3"], "input should be number"],
    [[true, false, true, false], "input should be number"],
    [
      [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 48, 49, 50,
      ],
      47,
    ],
    [[], "no number is missing"],
    [[1, 2, 3, 4, 5], "no number is missing"],
    [[1, 2, 3, 4, "1"], "input should be number"],
    [["1", 2, 3, 5, false], "input should be number"],
    [[[1, 2]], "input should be number"],
    [[{}], "input should be number"],
    [[() => console.log("data")], "input should be number"],
    [[-2, -1, 0, 1, 3], "input should be positive number only"],
    [[1, 2, 3, 4, 5, 6, 9], 7],
  ])
);
