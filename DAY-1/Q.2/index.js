

const word="CAT"

function patternPrint(word){
    let i=0
    while(i<word.length){
        let combine="";
        for(let j=0;j<= i;j++){
            combine += word[j]
        }
        console.log(combine)
        i++
    }
     i=0
    while(i<word.length-1){
        let combined="";
        for(let j=i+1;j<word.length;j++){
            combined += word[j]
        }
        console.log(combined)
        i++
    }

}

console.log(patternPrint(word))

