// 4. Write a program that determines if a string is an anagram of another string. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.?

function isAnagram(word1,word2){
    if(word1.length !== word2.length) return false
    const sorted1=  word1.split("").sort()
    const sorted2=  word2.split("").sort()

    for(let i=0;i<sorted1.length;i++){
        if(sorted1[i] !== sorted2[i]){
            return false
        }
    }

    return true
}

function anagramTestCase(input1,input2,expectOutput){
  return  isAnagram(input1,input2) === expectOutput ? true : false;
}

console.log(anagramTestCase("listen", "silent",true))
console.log(anagramTestCase("restful", "fluster",true))
console.log(anagramTestCase("hello", "world",false))
