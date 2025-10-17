// 2. Write a program to find whether a given number is an Armstrong number ( An Armstrong number is the sum of its own digits, each raised to the power of the number of digits).


function armstrongNumber(num){
    const arrStr = num.toString().split("")
    const lengthNum = arrStr.length
   const sum = arrStr.reduce((acc,item)=> Math.pow(Number(item),lengthNum) + acc ,0)
   return sum === num ? true : false
}

console.log(armstrongNumber(153))
console.log(armstrongNumber(370))
console.log(armstrongNumber(372))
console.log(armstrongNumber(371))