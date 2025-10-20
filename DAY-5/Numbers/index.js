 //1

// console.log(Math.round(3.49));
// console.log(Math.round(3.5));
// console.log(Math.floor(3.49));
// console.log(Math.floor(3.5));
// console.log(Math.ceil(3.49));
// console.log(Math.ceil(3.5));


//2

function safeAdd(a,b){
    return parseFloat(a+b)
}

console.log(safeAdd(0.1 , 0.2))

//3

// function isValidNumber(value){
//    if(isFinite(value) && !(isNaN(value))){
//     return true
//    }
//    else{
//     return false
//    }
// }

// console.log(isValidNumber(23))

//4


console.log(Math.floor(Math.random() * 50))

//5


// function sumOfDigits(num){
//   const numArr = String(num).split("")
//   return numArr.reduce((acc,item)=> acc + Number(item) , 0)
// }

// console.log(sumOfDigits(123))