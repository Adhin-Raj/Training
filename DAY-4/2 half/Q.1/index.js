// 1. Write a program which prints like a square matrix of given size. The matrix should be filled with natural numbers, starting from 1 in the top-left corner, increasing in an inward, clockwise spiral order.

// Input: 3
// Output:

// 1 2 3
// 8 9 4
// 7 6 5

//not complete

function squareMatrix(num) {
  const totalNum = num * num;
  let i = 1;
  for (let j = 0; j < num; j++) {
    let str = "";
    while (i <= totalNum) {
      str += i;
      if (str.length === num) {
        console.log(str);
        str = ``;
      }
      i++;
    }
    break;
  }
}

console.log(squareMatrix(3));
