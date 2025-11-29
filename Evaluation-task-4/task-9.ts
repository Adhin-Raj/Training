// 9. Write a program to compute the difference between two objects.

// Input:
// const a = { x:1, y:2, z:3 };
// const b = { x:1, y:4, w:5 };

// Output:
// {
//   changed: { y: [2,4] },
//   added: { w: 5 },
//   removed: ["z"]
// }
interface objType {
  [key: string]: number;
}

function objDiff(firstObj: objType, secondObj: objType) {
  const firstArr = Object.entries(firstObj).flat();
  const secondArr = Object.entries(secondObj).flat();
  let changed: { [key: string]: (string | number)[] | number[] } = {};
  let added;
  let obj: any = {};
  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      if (
        typeof firstArr[i] === "number" &&
        typeof secondArr[i] === "number" &&
        secondArr[i - 1] === firstArr[i - 1]
      ) {
        changed = {
          ...changed,
          [firstArr[i - 1]]: [firstArr[i], secondArr[i]],
        };
        obj = { ...obj, changed };
      } else if (
        typeof firstArr[i] === "string" &&
        typeof secondArr[i] === "string" &&
        firstArr[i] !== secondArr[i]
      ) {
        added = { [secondArr[i]]: secondArr[i + 1] };
        obj = { ...obj, added };
        let arr = [];
        arr.push(firstArr[i]);
        obj = { ...obj, removed: arr };
      }
    }
  }

  return obj;
}

console.log(objDiff({ x:1, y:2, z:3 },{ x:1, y:4, w:5 }))
console.log(objDiff({ x: 2, y: 6, z: 5 }, { x: 1, y: 4, o: 5 }));
console.log(objDiff({ x: 2, y: 6, z: 5,h:3 }, { x: 2, y: 4, o: 5,h:2}));

