// // 3.Write a program to convert a given matrix into its transpose.

function transposeMatrix(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (
        typeof arr[i][j] === "object" ||
        Array.isArray(arr[i][j] || typeof arr[i][j] === "function")
      ) {
        return "invalid input";
      }
    }
  }

  let transpose = [];
  let i = 0;
  let subArr = [];
  let k = 0;
  let itemLen = arr[0].length;

  while (k < itemLen) {
    for (const item of arr) {
      subArr.push(item[i]);

      if (subArr.length === arr.length) {
        transpose.push(subArr);
        i++;
        subArr = [];
      }
    }
    k++;
  }

  return transpose;
}

function transposeMatrixTest(array) {
  array.forEach((item) => {
    let flag = false;
    const result = transposeMatrix(item[0]);
    // console.log(result)
    if (typeof result === "string" && result === item[1]) {
      console.log("Passed");
    } else {
      for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
          if (result[i][j] !== item[1][i][j] && !flag) {
            console.log("Failed");
            flag = true;
            j = result[i].length;
          }
        }
      }

      if (!flag) {
        console.log("Passed");
      }
    }
  });

  return "Completed...!";
}

console.log(
  transposeMatrixTest([
    [
      [
        [2, 9, 0],
        [7, 1, 5],
      ],
      [
        [2, 7],
        [9, 1],
        [0, 5],
      ],
    ],
    [
      [
        [2, 9, 0, 3],
        [7, 1, 5, 8],
        [7, 1, 5, 8],
      ],
      [
        [2, 7, 7],
        [9, 1, 1],
        [0, 5, 5],
        [3, 8, 8],
      ],
    ],
    [
      [
        ["a", "d", "g"],
        ["b", "e", "h"],
        ["c", "f", "i"],
      ],
      [
        ["a", "b", "c"],
        ["d", "e", "f"],
        ["g", "h", "i"],
      ],
    ],
    [
      [
        [[2], 9, 0],
        [7, 1, 5],
        [7, 1, 5],
      ],
      "invalid input",
    ],
    [
      [
        [true, false, true],
        [false, true, true],
        [true, false, true],
      ],
      [
        [true, false, true],
        [false, true, false],
        [true, true, true],
      ],
    ],
    [
      [
        [{ a: 1 }, { b: 1 }, { c: 1 }],
        [{ d: 1 }, true, true],
        [true, false, true],
      ],
      "invalid input",
    ],
    [
      [
        [1, 2],
        [4, 5],
      ],
      [
        [1, 4],
        [2, 5],
      ],
    ],
    [
      [
        [1, 2],
        [4, 5],
        [6, 7],
        [8, 9],
        [3, 0],
      ],
      [
        [1, 4, 6, 8, 3],
        [2, 5, 7, 9, 0],
      ],
    ],
    [
      [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
      ],
      [
        [0, 5],
        [1, 6],
        [2, 7],
        [3, 8],
        [4, 9],
      ],
    ],
    [
      [
        [0, 1, 3],
        [5, 6],
      ],
      [
        [0, 5],
        [1, 6],
        [3, undefined],
      ],
    ],
    [
      [
        [0, 1, 3],
        [5, 6],
        [2, 3, 5],
      ],
      [
        [0, 5, 2],
        [1, 6, 3],
        [3, undefined, 5],
      ],
    ],
    [
      [
        [0, 1, 3, 4, 6],
        [5, 6],
        [2, 3, 5, 6],
        [1, 2],
      ],
      [
        [0, 5, 2, 1],
        [1, 6, 3, 2],
        [3, undefined, 5, undefined],
        [4, undefined, 6, undefined],
        [6, undefined, undefined, undefined],
      ],
    ],
    [
      [
        [0, 1, 3],
        [5, 6],
        [2, 3, 5],
      ],
      [
        [0, 5, 2],
        [1, 6, 3],
        [3, undefined, 5],
      ],
    ],
    [
      [
        ["1", 1, 3],
        [5, 6],
        [2, 3, "2"],
      ],
      [
        ["1", 5, 2],
        [1, 6, 3],
        [3, undefined, "2"],
      ],
    ],
    [
      [
        [() => item + item, 1, 3],
        [5, 6],
        [2, 3, 5],
      ],
      "invalid input",
    ],
  ])
);
