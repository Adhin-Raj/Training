// Checks whether an integer is even without using the modulo (%) operator.

function evenCheck(num:number) {
    let val = num/2

    if(val.toString().includes('.')){
        return false
    }
    else{
        return true
    }
}

console.log(evenCheck(3))
console.log(evenCheck(2))
console.log(evenCheck(12))
console.log(evenCheck(25))