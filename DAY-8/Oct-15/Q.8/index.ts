

const words=["care", "race", "acre", "dog", "god", "cat"]

function groupAnagram(words:string[]){
    let newArr = []
    let grouped:string[][] =[]
    for(let word of words){
        const sortedWord = word.split("").sort().join("")
        newArr.push(sortedWord)
    }
    let subArr=[]
    for(let i=0;i<newArr.length;i++){
        for(let j=0;j<newArr.length;j++){
            if(newArr[i] === newArr[j]){
                subArr.push(words[j])
             }
        }

        if(subArr.length > 1){
            // for(let k=0;k<  )
        grouped.push(subArr)

        }
    else{
        grouped.push(subArr)
    }

        subArr=[]
    }

        const removeDup = new Set(grouped[1])
    return removeDup
}

console.log(groupAnagram(words))