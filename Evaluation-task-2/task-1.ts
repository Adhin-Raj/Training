// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th
// prime is 13. What is the 10,001st prime number?


function PrimeNumber(num: number) {
  let primeNumbers = [];
  let i = 2;
  let isLimit = false;
  while (i < Infinity && !isLimit) {
    let flag = false;
    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        flag = true;
      }
    }

    if (!flag) {
      primeNumbers.push(i);
    }

    if (primeNumbers.length === num) {
      isLimit = true;
    }
    i++;
  }

  return primeNumbers[num - 1];
}


console.log(PrimeNumber(10001))  //104743
console.log(PrimeNumber(1))
console.log(PrimeNumber(2))
console.log(PrimeNumber(3))
console.log(PrimeNumber(300))
console.log(PrimeNumber(5))
console.log(PrimeNumber(100))



