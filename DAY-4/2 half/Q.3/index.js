// // 3.Write a program to convert a given matrix into its transpose.

function transposeMatrix(arr) {
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

console.log(
  transposeMatrix([
    [2, 9, 0],
    [7, 1, 5],
  ])
);

console.log(
  transposeMatrix([
    [2, 9, 0,3],
    [7, 1, 5,8],
    [7, 1, 5,8],
  ])
);

