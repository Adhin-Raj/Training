// 1. Write a function named calculateTotal that takes two arguments:
//    - billAmount (a number)
//    - taxPercentage (a number, e.g., 15 for 15%)
   
// The function should calculate the tax amount and return the total bill (bill amount + tax amount). Use default 20% if tax is not provided.


function calculateTotal(billAmount:number,taxPercentage:number=20){
    const taxAmount = billAmount * (taxPercentage/100)

    return taxAmount + billAmount
}

console.log(calculateTotal(200,30))
console.log(calculateTotal(200))


