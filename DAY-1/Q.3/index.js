function studentResult(students) {
  let resultList = [];
  let resultObj = {};
  for (const item of students) {
    if (typeof item.name !== "string" || typeof item.marks !== "number") {
      return "name should be in string and the mark should be in number";
    }

    if (item.marks > 60) {
      resultObj = { name: item.name, status: "Pass" };
    } else {
      resultObj = { name: item.name, status: "Fail" };
    }
    resultList.push(resultObj);
  }
  return resultList;
}

function studentResultTest(arr) {
  arr.forEach((element) => {
    let result = studentResult(element[0]);

    let flag = false;
    if ( result === element[1]) {
      console.log("Passed");
    } else {
      for (let i = 0; i < result.length; i++) {
        let objArr1 = Object.entries(result[i]);
        let objArr2 = Object.entries(element[1][i]);

        if (objArr1.length !== objArr2.length) {
          console.log("Failed");
          flag = true;
          i = result.length;
        }
        let count = 0;
        for (const [key1, values1] of objArr1) {
          for (let [key2, values2] of objArr2) {
            if (key1 === key2 && values1 === values2) {
              count += 1;
            }
          }
        }
        if (count === objArr1.length && !flag) {
          console.log("Passed");
          i = result.length;
        } else {
          console.log("Failed");
          i = result.length;
        }
      }
    }
  });
}

console.log(
  studentResultTest([
    [
      [
        { name: "Alice", marks: 42 },
        { name: "Bob", marks: 67 },
        { name: "Charlie", marks: 35 },
      ],
      [
        { name: "Alice", status: "Fail" },
        { name: "Bob", status: "Pass" },
        { name: "Charlie", status: "Fail" },
      ],
    ],
    [
      [
        { name: "Alice", marks: 61 },
        { name: "Bob", marks: 67 },
        { name: "Charlie", marks: 35 },
      ],
      [
        { name: "Alice", status: "Pass" },
        { name: "Bob", status: "Pass" },
        { name: "Charlie", status: "Fail" },
      ],
    ],
    [
      [
        { name: "Alice", marks: 20 },
        { name: "Bob", marks: 21 },
        { name: "Charlie", marks: 35 },
      ],
      [
        { name: "Alice", status: "Fail" },
        { name: "Bob", status: "Fail" },
        { name: "Charlie", status: "Fail" },
      ],
    ],
    [
      [
        { name: "Alice", marks: 61 },
        { name: "Bob", marks: 62 },
        { name: "Charlie", marks: 63 },
      ],
      [
        { name: "Alice", status: "Pass" },
        { name: "Bob", status: "Pass" },
        { name: "Charlie", status: "Pass" },
      ],
    ],
    [
      [
        { name: "Alice", marks: undefined },
        { name: "Bob", marks: 62 },
        { name: "Charlie", marks: 63 },
      ],
      "name should be in string and the mark should be in number"
    ],
     [
      [
        { name: "Alice", marks: null },
        { name: "Bob", marks: 62 },
        { name: "Charlie", marks: 63 },
      ],
      "name should be in string and the mark should be in number"
    ],
     [
      [
        { name: "Alice", marks: {mark:10} },
        { name: "Bob", marks: 62 },
        { name: "Charlie", marks: 63 },
      ],
     "name should be in string and the mark should be in number"
    ],
     [
      [
        { name: "Alice", marks: [10] },
        { name: "Bob", marks: 62 },
        { name: "Charlie", marks: 63 },
      ],
      "name should be in string and the mark should be in number"
    ],
     [
      [
        { name: "Alice", marks: '67' },
        { name: "Bob", marks: 62 },
        { name: "Charlie", marks: 63 },
      ],
      "name should be in string and the mark should be in number"
    ],
     [
      [
        { name: 12, marks: 34 },
        { name: "Bob", marks: 62 },
        { name: "Charlie", marks: 63 },
      ],
      "name should be in string and the mark should be in number"
    ],
     [
      [
        { name: {name:'Alice'}, marks: 78 },
        { name: "Bob", marks: 62 },
        { name: "Charlie", marks: 63 },
      ],
     "name should be in string and the mark should be in number"
    ],
    [
      [
        { name: ["Alice"], marks: 78 },
        { name: "Bob", marks: 62 },
        { name: "Charlie", marks: 63 },
      ],
      "name should be in string and the mark should be in number"
    ],
    [
      [
        { name: {name:'Alice'}, marks: 78 },
        { name: "Bob", marks: 62 },
        { name: "Charlie", marks: 63 },
      ],
     "name should be in string and the mark should be in number"
    ],
    [
      [
        { name:null, marks: 78 },
        { name: "Bob", marks: 62 },
        { name: "Charlie", marks: 63 },
      ],
     "name should be in string and the mark should be in number"
    ],
    [
      [
        { name:undefined, marks: 78 },
        { name: "Bob", marks: 62 },
        { name: "Charlie", marks: 63 },
      ],
      "name should be in string and the mark should be in number",
    ],
  ])
);
