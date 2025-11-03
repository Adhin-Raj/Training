// Implement your own version of JavaScript's Array.filter() function called myFilter() that works exactly the same.
// Then test it with a condition like "keep only numbers > 10".

function myFilter(arr, fun) {
  let filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      filtered.push(arr[i]);
    }
  }

  return filtered;
}

function myFilterTest(arr) {
  for (const subArr of arr) {
    let flag = false;
    let result = myFilter(subArr[0], subArr[1]);
    if (result === subArr[2]) {
      console.log("Passed");
    } else {
      for (let i = 0; i < subArr[2].length; i++) {
        if (!Array.isArray(result[i]) && typeof result === "object") {
          result = JSON.stringify(result);
          subArr[2] = JSON.stringify(subArr[2]);
        }
        if (subArr[2][i] !== result[i]) {
          console.log("Failed");
          i = subArr[2].length;
          flag = true;
        }
      }
      if (!flag) {
        console.log("Passed");
      }
    }
  }
  return "Testing Completed!";
}

console.log(
  myFilterTest([
    [[1, 2, 3, 4, 5], (item) => item % 2 === 0, [2, 4]],
    [
      ["hello", 1, 3, "bro"],
      (item) => typeof item === "string",
      ["hello", "bro"],
    ],
    [[1, 2, 3, 4, 5], (item) => item > 2, [3, 4, 5]],
    [
      ["cricket", "football", "baseball", "volleyball", "hockey"],
      (item) => item.length >= 8,
      ["football", "baseball", "volleyball"],
    ],
    [
      [
        { name: "a", value: 2 },
        { name: "b", value: 4 },
      ],
      (item) => item.name === "a",
      [{ name: "a", value: 2 }],
    ],
    [
      [
        { name: "a", value: 2 },
        { name: "b", value: 4 },
      ],
      (item) => item.value * 2 === 2,
      [],
    ],
    ["", (item) => item === undefined, []],
    [
      ["walter", "jasse", "fring", "skyler"],
      (item) => item === "walter",
      ["walter"],
    ],
    [[10, 22, 31, 34, 15], (item) => Number(item.toString(2)) === 11111, [31]],
    [
      ["apple", "banana", "grapes", "mango", "orange"],
      (item) => item.includes("ap"),
      ["apple", "grapes"],
    ],
    [[true, false, true, false], (item) => item === true, [true, true]],
    [
      ["apple", 12, "orange"],
      (item) => item.toString().includes("ora"),
      ["orange"],
    ],
    [
      [
        { name: "walter", age: 23, gender: "male" },
        { name: "skyler", age: 28, gender: "female" },
        { name: "jesse", age: 21, gender: "male" },
      ],
      (item) => item.age > 22 && item.gender === "male",
      [{ name: "walter", age: 23, gender: "male" }],
    ],
    [[1, 2, 3, 4, true], (item) => item !== true, [1, 2, 3, 4]],
    [[2, 4, 8, 9], (item) => (item + 10) / 2 === 9, [8]],
  ])
);
