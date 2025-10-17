// 5. Write a function which receives 'n' number of number arguments, and it should return their sum. (Note: Arguments can be in any count).

function sumOfArr() {
  const arrArg = Object.entries(arguments);
  return arrArg.reduce((acc, item) => item[1] + acc, 0);
}

console.log(sumOfArr(1, 2, 3, 4));
console.log(sumOfArr(1, 2));
