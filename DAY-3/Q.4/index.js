// 4. Write a function which accepts two arrays and a position value, where the values of the second array should be placed in the given position of the first array. The function should return an updated array.

function positionChanging(arr1, arr2, target) {
  let i = 0;

  while (i < arr1.length || i < arr2.length) {
    if (i < arr1.length && typeof arr1[i] !== "number") {
      return "input should be number";
    }
    if (i < arr2.length && typeof arr2[i] !== "number") {
      return "input should be number";
    }
    i++;
  }

  const noOfDelete = 0;
  const revArr2 = arr2.reverse();
  for (let item of revArr2) {
    arr1.splice(target, noOfDelete, item);
  }
  return arr1;
}

function positionChangeTest(arr) {
  arr.forEach((item) => {
    let flag = false;
    const result = positionChanging(item[0][0], item[0][1], item[0][2]);
    for (let i = 0; i < result.length; i++) {
      if (result[i] !== item[1][i]) {
        console.log("Failed");
        i = result.length;
        flag = true;
      }
    }

    if (!flag) {
      console.log("Passed");
    }
  });

  return "Completed...!";
}

console.log(
  positionChangeTest([
    [
      [[1, 2, 3], [4, 5, 6], 2],
      [1, 2, 4, 5, 6, 3],
    ],
    [
      [[10, 20, 30], [5], 0],
      [5, 10, 20, 30],
    ],
    [
      [[], [1, 2, 3], 0],
      [1, 2, 3],
    ],
    [
      [[1, 2, 3], [], 1],
      [1, 2, 3],
    ],
    [
      [[1], [2, 3, 4], 0],
      [2, 3, 4, 1],
    ],
    [[["a", "b"], ["c"], 0], "input should be number"],
    [[[1, "two", true], [false, null], 2], "input should be number"],
    [[["apple"], [1, { a: 2 }], 0], "input should be number"],
    [[[[1], [2], [3], [4]], 1], "input should be number"],
    [
      [[10, 20, 30], [1, 2, 3], 1],
      [10, 1, 2, 3, 20, 30],
    ],
    [
      [[1, 2, 3, 4, 5], [9, 8, 7], 2],
      [1, 2, 9, 8, 7, 3, 4, 5],
    ],
    [
      [[0, 0, 0, 0], [1, 2, 3], 2],
      [0, 0, 1, 2, 3, 0, 0],
    ],
    [[[], [], 0], []],
    [[[], [5], 3], [5]],
    [[["$", "#"], ["%", "&"], 2], "input should be number"],
  ])
);
