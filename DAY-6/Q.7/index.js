// Without using .flat(), write a recursive function to flatten an array of arbitrary depth.

function flattenArr(arr, i = 0) {
  let newArr = [];

  if (i >= arr.length) {
    return newArr;
  }

  while (i < arr.length) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flattenArr(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
    i++;
  }
  return newArr;
}

function flattenArrTest(array) {
  array.forEach((element) => {
    const result = flattenArr(element[0]);
    // console.log(result)
    if (JSON.stringify(result) === JSON.stringify(element[1])) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });

  return "Completed...!";
}

console.log(
  flattenArrTest([
    [
      [1, [2, [3, [4]], 6, 5]],
      [1, 2, 3, 4, 6, 5],
    ],
    [
      [1, [2, [3, [4, [8]]], 5]],
      [1, 2, 3, 4, 8, 5],
    ],
    [
      [1, [2], [3], 4, [5, [6]]],
      [1, 2, 3, 4, 5, 6],
    ],
    [
      [1, [1, [1], [1, [1, [1], [1], [1]]]]],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ],
    [
      [1, [{ a: 2 }, [{ b: 3 }]]],
      [1, { a: 2 }, { b: 3 }],
    ],
    [
      ["1", ["2", ["3", ["4", ["5"]]]]],
      ["1", "2", "3", "4", "5"],
    ],
    [
      [true, [false, true, true, [false, true, [true]]]],
      [true, false, true, true, false, true, true],
    ],
    [
      ["1", [2, { isAdmin: false }, [{ isPassed: true }, 5], null]],
      ["1", 2, { isAdmin: false }, { isPassed: true }, 5, null],
    ],
    [[], []],
    [
      [1, [-2], [-3, [-6], [-9]]],
      [1, -2, -3, -6, -9],
    ],
    [
      ["#","!",["4"],"5"],
      ["#","!","4","5"]
    ],
    [[undefined,[undefined,{a:2}]],[undefined,undefined,{a:2}]],
    [[null,[undefined,['1'],true],NaN],[null,undefined,'1',true,NaN]],
    [[1,'a',['c',['d'],'5',['9',['a',['c',['h','e',['r']]]]]]],[1,'a','c','d','5','9','a','c','h','e','r']],
    
  ])
);
