// 3. Invert Keys and Values in an Object

// Test cases:
// Input: { a: 1, b: 2 }
// Output: { 1: "a", 2: "b" }

function invertKeyValue(obj) {
  if (typeof obj !== "object" || Array.isArray(obj))
    return "input should be an object";
  let newObj = {};
  const reverseArr = Object.entries(obj).map((item) => item.reverse());

  for (const [key, val] of reverseArr) {
    if (
      typeof key === "object" ||
      typeof key === "function" ||
      Array.isArray(key)
    ) {
      return "input value shouldn't be an object,function or array";
    }
    if (!newObj[key]) {
      newObj[key] = val;
    }
  }
  return newObj;
}

function invertKeyValueTest(array) {
  array.forEach((item) => {
    let flag = false;
    const result = invertKeyValue(item[0]);
    if (typeof result === "string" && result === item[1]) {
      console.log("Passed");
    } else {
      const resultObj = Object.entries(result).flat();
      const expectObj = Object.entries(item[1]).flat();

      for (let i = 0; i < expectObj.length; i++) {
        if (resultObj[i] !== expectObj[i]) {
          console.log("Failed");
          flag = true;
          i = expectObj.length;
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
  invertKeyValueTest([
    [
      { a: 1, b: 2 },
      { 1: "a", 2: "b" },
    ],
    [
      { name: "walter", age: 62 },
      { walter: "name", 62: "age" },
    ],
    [[1, 2, 3, 4], "input should be an object"],
    [[true, false], "input should be an object"],
    [[(item) => item + item, { a: 10 }], "input should be an object"],
    [
      { a: NaN, b: true },
      { NaN: "a", true: "b" },
    ],
    [
      { a: [1, 3, 4], c: 2 },
      "input value shouldn't be an object,function or array",
    ],
    [
      { a: "string", b: 2 },
      { string: "a", 2: "b" },
    ],
    [(data) => console.log(data), "input should be an object"],
    [false, "input should be an object"],
    [10, "input should be an object"],
    [
      { id: 2, name: "levi", mark: 98, isAdmin: true },
      { 2: "id", levi: "name", 98: "mark", true: "isAdmin" },
    ],
    [
      { 1: 2, 2: "3", 3: 4 },
      { 2: "1", 3: "2", 4: "3" },
    ],
    [
      { a: "", b: false },
      { "": "a", false: "b" },
    ],
    [
      { name: "Rahul", mark: [{ a: "12" }] },
      "input value shouldn't be an object,function or array",
    ],
  ])
);
