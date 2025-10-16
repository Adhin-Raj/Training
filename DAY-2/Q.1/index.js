// 1. Write a program that checks if a given number is prime.

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

function primeTestCase(input,output){
    return isPrime(input) === output ? true : false

}

console.log(isPrime(7,true))
console.log(isPrime(10,false))
console.log(primeTestCase(29,true))
