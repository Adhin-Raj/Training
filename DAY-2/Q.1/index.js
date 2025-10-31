// 1. Write a program that checks if a given number is prime.

function isPrime(n) {
  if(typeof n !== "number") return false
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

function primeTestCase(arr){
  arr.forEach(element => {
      const result = isPrime(element[0])
      if(result === element[1]){
        console.log("Passed")
      }
      else{
        console.log("Failed")
      }
  }); 
}


console.log(
  primeTestCase([
    [29, true],
    [7, true],
    [4, false],
    [8, false],
    [1, false],
    ["1", false],
    [50000, false],
    [{}, false],
    [[], false],
    [179, true],
    [true, false],
    [100000, false],
    ["12f", false],
    [3, true],
    [()=>console.log("log"),false]
  ])
);
