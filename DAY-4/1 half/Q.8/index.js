// 8. Write a program that finds the maximum product of three numbers in a given list of integers.


function maxOfProduct(arr){
    const descArr = arr.sort((a,b)=>b-a)
    return descArr.slice(0,3).reduce((acc,item)=>acc *= item , 1)
}

console.log(maxOfProduct([1, 2, 3, 4]))
console.log(maxOfProduct([-4, -3, -2, -1, 0]))
console.log(maxOfProduct([-1, -2, -3, -4, -5]))
