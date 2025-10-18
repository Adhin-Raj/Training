// 9. Write a program that determines if a string is an anagram of another string. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.

function anagramCheck(word1,word2){
   
    if(word1.length !== word2.length) return false

    const sortWord1 = word1.split("").sort()
    const sortWord2 = word2.split("").sort()
        
 for(let i=0;i<sortWord1.length;i++){
    if(sortWord1[i] !== sortWord2[i]) return false
 }

    return true
}

console.log(anagramCheck("listen", "silent"))
console.log(anagramCheck("restful", "fluster"))
console.log(anagramCheck("hello", "world"))


