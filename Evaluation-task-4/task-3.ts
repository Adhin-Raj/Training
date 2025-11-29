// 3. Convert file size in bytes to human readable text.

// Input: 1500
// Output: "1.46 KB"

const sizes=["KB",'MB',"GB","TB"]

function converter(val:number) {
    return (val/1024)
}  

function bytesToKB(input:number) {
    let i=0
    if(input < 1024) return input +" " + "bytes"
        while( input > 1024) {
             input = converter(input)
            i++
        } 
        if(i > 4) {
            i =4
        }
         return input.toFixed(2) +" "+ sizes[i-1]
}
console.log(bytesToKB(150))
console.log(bytesToKB(150000000))
console.log(bytesToKB(1500))
console.log(bytesToKB(15000))
console.log(bytesToKB(1500))
console.log(bytesToKB(15000000000000000))
console.log(bytesToKB(150000000000))



 