 //1

// console.log(Math.round(3.49));
// console.log(Math.round(3.5));
// console.log(Math.floor(3.49));
// console.log(Math.floor(3.5));
// console.log(Math.ceil(3.49));
// console.log(Math.ceil(3.5));


//2 done after referring 

// function safeAdd(a,b) {
//     const aDecimal = a.toString().split(".")[1].length
//     const bDecimal = b.toString().split(".")[1].length

//     const maxDecimal = Math.max(aDecimal,bDecimal)

//     const scaler = Math.pow(10,maxDecimal)

//     return (Math.round(a * scaler) + Math.round(b * scaler)) / scaler
// }

// console.log(safeAdd(0.1,0.2))
// console.log(safeAdd(1.23, 4.567))

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

//4 done after referring

// console.log(Math.floor(Math.random() * 49)+51)

//5


// function sumOfDigits(num){
//   const numArr = String(num).split("")
//   return numArr.reduce((acc,item)=> acc + Number(item) , 0)
// }

// console.log(sumOfDigits(123))