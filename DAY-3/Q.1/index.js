// 1. Write a program that should interpret each array item as a number, and return the sum.

function arrayInterpretSum(arrNum){
    return arrNum.reduce((acc,item)=>Number(item.join("")) + acc ,0)
}

console.log(arrayInterpretSum([[1,2,3], [0, 7]]))
console.log(arrayInterpretSum([[5,2,3], [0, 4],[6,2]]))