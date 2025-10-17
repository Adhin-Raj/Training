// 9. Write a function to remove duplicate characters from the given string.

function removeDuplicates(str){
    const dupObj = new Set(str)
    let afterDup = ''
    for(const char of dupObj){
        afterDup += char
    }

    return afterDup
}

console.log(removeDuplicates('apple'))
console.log(removeDuplicates('malayalam'))
console.log(removeDuplicates('programming'))

