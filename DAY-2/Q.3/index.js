// 3. Write a program that takes a list of integers as input and returns a new list with only the even numbers.

function listOfEven(arr) {
  let evenList = [];
  for (const num of arr) {
    if (typeof num !== "number") {
      return "input should be number..!";
    }
    if (num % 2 === 0) {
      evenList.push(num);
    }
  }
  return evenList;
}

function listOfEvenTestCase(arr) {
  arr.forEach((element) => {
    let flag = false;
    const actualOutput = listOfEven(element[1]);
    if (typeof actualOutput === "string") {
      console.log("Failed");
    } else {
      if (actualOutput.length !== element[1].length) {
        console.log("Failed");
        flag = true;
      }
      for (let i = 0; i < actualOutput.length; i++) {
        if (actualOutput[i] !== element[1][i]) {
          console.log("Failed");
          flag = true;
          i = actualOutput.length;
        }
      }

      if (!flag) {
        console.log("Passed");
      }
    }
  });

  return "Completed...!"
}

console.log(
  listOfEvenTestCase([
    [
      [1, 2, 3, 4, 5, 6],
      [2, 4, 6],
    ],
    [
      [7, 8, 9, 10, 11, 12],
      [8, 10, 12],
    ],
    [
      [2, 4, 6, 8, 10],
      [2, 4, 6, 8, 10],
    ],
    [
      [12, 41, 5, 354, 62, 46],
      [12, 354, 62, 46],
    ],
    [[1.2, 2.4, 1], []],
    [
      [-1, -2, -3, -4],
      [-2, -4],
    ],
    [
      [2 ^ 2, 3 ^ 3, 2 ^ 4],
      [2 ^ 2, 2 ^ 4],
    ],
    [["1", "2", "3", "4"], []],
    [[undefined, 2, "4"], [2]],
    [[null, 2, "4"], [2]],
    [[{}, 2, 4, 1, 3], []],
    [
      [(item) => item * 2, 1, 2, 4, 5, 6],
      [2, 4, 6],
    ],
    [
      [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
      ],
      [
        2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38,
        40, 42, 44, 46, 48, 50,
      ],
    ],
    [["hello", "world"], []],
    [[], []],
  ])
);
