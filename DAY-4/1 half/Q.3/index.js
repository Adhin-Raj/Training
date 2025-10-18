// 3. Invert Keys and Values in an Object

// Test cases:
// Input: { a: 1, b: 2 }
// Output: { 1: "a", 2: "b" }

function invertKeyValue(obj) {
  let newObj = {};
  const reverseArr = Object.entries(obj).map((item) => item.reverse());

  for (const [key, val] of reverseArr) {
    if (!newObj[key]) {
      newObj[key] = val;
    }
  }

  return newObj;
}

console.log(invertKeyValue({ a: 1, b: 2 }));
