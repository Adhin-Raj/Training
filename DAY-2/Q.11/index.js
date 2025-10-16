// 11. Write a program that determines if a given number is a perfect square. A perfect square is an integer that is equal to the square of another integer.

function perfectSquare(n){
    const sqrtArr = Math.sqrt(n).toString().split("")
    for(const item of sqrtArr ){
        if(item === "."){
            return false
        }
    }

    return true
}

console.log(perfectSquare(16))
console.log(perfectSquare(10))
console.log(perfectSquare(25))



