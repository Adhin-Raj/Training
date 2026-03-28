// 6. Develop a string compression tool.

// Input: "aaabbbbcc", "encrypt"
// Output: "a3b4c2"

// Input: "a3b4c2", "decrypt"
// Output: "aaabbbbcc"

type compressionType = "encrypt" | "decrypt"

function stringCompression(str:string,type:compressionType) {
    if(type === "encrypt") {
        let obj:{[key:string]:number}={}
        for(let letter of str) {
            if(!obj[letter]){
                obj[letter] = 1
            }
            else{
                obj[letter] = obj[letter] + 1
            }
        }
        let encrypted=''
        for(let key in obj){
            encrypted += `${key}${obj[key]}`
        }

        return encrypted
    }
    else{
        let decrypted =''

        for(let i=0;i<str.length;i++ ){
            if(i % 2 ===0 ) {
                for(let j=0;j<Number(str[i+1]);j++) {
                    decrypted += str[i]
                }
                i++
            }
        }

        return decrypted
    }
}

console.log(stringCompression("aaabbbbcc",'encrypt'))
console.log(stringCompression("aaaaaaabbbbbbbccccddddd",'encrypt'))
console.log(stringCompression("a3b4c2",'decrypt'))
console.log(stringCompression("a7b7c4d5",'decrypt'))
