//question-1

// map function
// function myMap(arr, fun) {
//   if (!Array.isArray(arr) || !typeof fun === "function") {
//     return "input should be an array and function";
//   }
//   let afterMap = [];
//   for (const item of arr) {
//     afterMap.push(fun(item));
//   }
//   return afterMap;
// }

// function testMyMap(arr) {
//   let flag = false;
//   for (let subArr of arr) {
//     let result = myMap(subArr[0], subArr[1]);
//     if (result === subArr[2]) {
//       console.log("Passed");
//     } else {
//       for (let i = 0; i < subArr[2].length; i++) {
//         if (!Array.isArray(result[i]) && typeof result === "object") {
//           result = JSON.stringify(result);
//           subArr[2] = JSON.stringify(subArr[2]);
//         }
//         if (subArr[2][i] !== result[i]) {
//           console.log("Failed");
//           i = subArr[2].length;
//           flag = true;
//         }
//       }
//       if (!flag) {
//         console.log("Passed");
//       }
//     }
//   }
//   return "Completed...!";
// }

// console.log(
//   testMyMap([
//     [[1, 2, 3, 4, 5], (item) => item * 2, [2, 4, 6, 8, 10]],
//     [[1, 2, 3, 4, 5], (item) => item + 10, [11, 12, 13, 14, 15]],
//     [[1, -2, 3, -4, 5], (item) => item * 10, [10, -20, 30, -40, 50]],
//     [
//       [1, -2, 3, -4, 5],
//       (item) => item === 10,
//       [false, false, false, false, false],
//     ],
//     [
//       [1, -2, 3, -4, 5],
//       (item) => item === 1,
//       [true, false, false, false, false],
//     ],
//     [
//       [10, 22, 31, 34, 15],
//       (item) => item % 2 === 0,
//       [true, true, false, true, false],
//     ],
//     [[10, 22, 31, 34, 15], (item) => item / 2, [5, 11, 15.5, 17, 7.5]],
//     [[10, 22, 31, 34, 15], (item) => item - 2, [8, 20, 29, 32, 13]],
//     [
//       [10, 22, 31, 34, 15],
//       (item) => String(item),
//       ["10", "22", "31", "34", "15"],
//     ],
//     [[4, 9, 16, 25, 36], (item) => Math.sqrt(item), [2, 3, 4, 5, 6]],
//     [
//       [
//         { name: "a", value: 2 },
//         { name: "b", value: 4 },
//       ],
//       (item) => item.value * 2,
//       [4, 8],
//     ],
//     [
//       [
//         { name: "a", value: 2 },
//         { name: "b", value: 4 },
//       ],
//       (item) => item.name === "a",
//       [true, false],
//     ],
//     [[8.2, 9, 1.6, 25, 36.0], (item) => item + 1, [9.2, 10, 2.6, 26, 37.0]],
//     [
//       [10, 22, 31, 34, 15],
//       (item) => Number(item.toString(2)),
//       [1010, 10110, 11111, 100010, 1111],
//     ],
//     [
//       ["walter", "jasse", "fring", "skyler"],
//       (item) => `hello,${item}`,
//       ["hello,walter", "hello,jasse", "hello,fring", "hello,skyler"],
//     ],
//     [
//       [true, false, true, false, false],
//       (item) => {
//         if (item) {
//           return "it is true";
//         } else {
//           return "it is not true";
//         }
//       },
//       [
//         "it is true",
//         "it is not true",
//         "it is true",
//         "it is not true",
//         "it is not true",
//       ]
//     ],
//   ])
// );

// filter function

// function myFilter(arr, fun) {

//   if (!Array.isArray(arr) || !typeof fun === "function") {
//     return "input should be an array and function";
//   }
//   let filtered = [];
//   for (const item of arr) {
//     if (fun(item)) {
//       filtered.push(item);
//     }
//   }
//   return filtered;
// }

// function myFilterTest(arr) {
//     for (const subArr of arr) {
//         let flag = false;
//     let result = myFilter(subArr[0], subArr[1]);
//     if(result === subArr[2]){
//       console.log("Passed")
//     }
//     else{
//       for (let i = 0; i < subArr[2].length; i++) {
//         if (!Array.isArray(result[i]) && typeof result === "object") {
//           result = JSON.stringify(result)
//           subArr[2] =JSON.stringify(subArr[2])
//         }
//       if (subArr[2][i] !== result[i]) {
//         console.log("Failed");
//         i = subArr[2].length;
//         flag = true;
//       }
//     }
//     if(!flag) {
//       console.log("Passed");
//     }
//     }
//   }
//   return 'Testing Completed!'
// }

// console.log(
//   myFilterTest([
//     [[1, 2, 3, 4, 5], (item) => item % 2 === 0, [2, 4]],
//     [
//       ["hello", 1, 3, "bro"],
//       (item) => typeof item === "string",
//       ["hello", "bro"],
//     ],
//     [[1, 2, 3, 4, 5], (item) => item > 2, [3,4,5]],
//     [ ["cricket", "football", "baseball", "volleyball", "hockey"],(item)=>item.length >= 8,[ "football",'baseball',"volleyball"]]
//     ,[
//       [
//         { name: "a", value: 2 },
//         { name: "b", value: 4 },
//       ],
//       (item) => item.name === "a",
//       [ { name: "a", value: 2 }]
//     ],
//     [
//       [
//         { name: "a", value: 2 },
//         { name: "b", value: 4 },
//       ],
//       (item) => (item.value * 2) === 2,
//       [],
//     ],
//     [
//       "",
//       (item) => item === undefined,
//        "input should be an array and function",
//     ],
//      [
//       ["walter", "jasse", "fring", "skyler"],
//       (item) => item === 'walter',
//       ["walter"],
//     ],
//     [
//       [10, 22, 31, 34, 15],
//       (item) => Number(item.toString(2)) === 11111,
//       [31],
//     ],
//     [
//          ["apple", "banana", "grapes", "mango", "orange"],
//          (item)=>item.includes("ap"),
//          ["apple","grapes"]
//     ],
//     [
//         [true,false,true,false],
//         (item)=>item === true,
//         [true,true]
//     ],
//     [
//         ["apple",12,"orange"],
//         (item)=> item.toString().includes("ora"),
//         ["orange"]
//     ],
//     [
//         [{name:"walter",age:23,gender:"male"},{name:"skyler",age:28,gender:"female"},{name:"jesse",age:21,gender:"male"}],
//         (item=>item.age > 22 && item.gender === "male"),
//         [{name:"walter",age:23,gender:"male"}]
//     ],
//     [
//         [1,2,3,4,true],
//         (item)=>item !== true,
//         [1,2,3,4]
//     ],
//     [
//         [2,4,8,9],
//         (item)=>(item +10)/2 === 9,
//         [8]
//     ]

//   ])
// );

// reduce function

function myReduce(arr, fun, initialValue) {
  if (!Array.isArray(arr) || !typeof fun === "function") {
    return "input should be an array and function";
  }
  let acc = initialValue;
  for (const item of arr) {
    acc = fun(item, acc);
  }
  return acc;
}

function myReduceTest(arr) {
  for (const subArr of arr) {
    let flag = false;

    let result = myReduce(subArr[0], subArr[1], subArr[2]);
    if (result === subArr[3]) {
      console.log("Passed");
      flag = true;
    } else if (result !== subArr[3] && !flag) {
      console.log("Failed");
      flag = true;
    }

    if (!flag) {
      console.log("Passed");
    }
  }
  return "Testing Completed!";
}

console.log(
  myReduceTest([
    [[1, 2, 3, 4], (item, acc) => acc + item, 0, 10],
    [[1, 2, 3, 4], (item, acc) => item * acc, 1, 24],
    [[10, 2, 3], (item, acc) => acc - item, 10, -5],
    [[{ val: 1 }, { val: 2 }, { val: 3 }], (item, acc) => item.val + acc, 0, 6],
    [
      ["welcome", "To", "My", "Reduce", "Function"],
      (item, acc) => acc + item,
      "",
      "welcomeToMyReduceFunction",
    ],
    [[1, 2, 3, 4], (item, acc) => Math.max(item, acc), 0, 4],
    [[1, 2, 3, 4], (item, acc) => Math.min(item, acc), 1, 1],
    [[1, 4, 9, 16], (item, acc) => Math.sqrt(item) + acc, 0, 10],
    [[], (item, acc) => item + acc, 0, 0],
    [[5], (item, acc) => acc + item, 0, 5],
    [
      ["apple", "banana", "orange"],
      (acc, item) => item + "," + acc,
      "",
      ",apple,banana,orange",
    ],
    [[true, true, false], (acc, item) => acc && item, true, false],
    [
      "string",
      (acc, item) => acc + item,
      "",
      "input should be an array and function",
    ],
  ])
);
