// 5. Write a function to check object equality. Which receives two objects as arguments, and it should return "Equal" if both contain same keys, values, "Not Equal" if not.

// Test cases:
// Input: { a: 1, b: 2 }, { b: 3, c: 4 }
// Output: "Not Equal"

interface objType{
    [key:string]:number
}

function objectEqualityCheck(obj1:objType, obj2:objType):string {
  const objArr1 = Object.entries(obj1);
  const objArr2 = Object.entries(obj2);
  if (objArr1.length !== objArr2.length) return "Not Equal";
  let count = 0;
  for (const [key1, values1] of objArr1) {
    for (let [key2, values2] of objArr2) {
      if (key1 === key2 && values1 === values2) {
        count += 1;
      }
    }
  }
  if (count === objArr1.length) return "Equal";
  else return "Not Equal";
}

console.log(objectEqualityCheck({ a: 1, b: 2 }, { b: 3, c: 4 }));
console.log(objectEqualityCheck({ a: 1, b: 2 }, { b: 2, a: 1 }));
console.log(objectEqualityCheck({ a: 1, b: 2 }, { b: 2, a: 1 ,c:4}));
console.log(objectEqualityCheck({ a: 1, b: 2, c:4 }, { b: 2, a: 1, c:4 }));


