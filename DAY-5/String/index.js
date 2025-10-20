//1

// const str = ' Hello, World! '
// console.log(str.trim().replace(', ','').replace('!','').toLowerCase())

//2


// function extractUserName(str){
//     const index = str.indexOf('@')
//     return str.slice(0,index)
// }

// console.log(extractUserName("walter@gmail.com"))

//3

// function capitalize(sentence) {
//   let indexArr = [0];
//   const sentenceArr = sentence.split("");

//   let capitalizeSen = "";

//   for (let i = 0; i < sentenceArr.length; i++) {
//     if (sentence[i] === " ") {
//       indexArr.push(i + 1);
//     }
//   }
//   for (let item of indexArr) {
//     capitalizeSen = sentence.replace(
//       `${sentence[item]}`,
//       `${sentence[item].toUpperCase()}`
//     );
//     sentence = capitalizeSen;
//   }

//   return sentence;
// }

// console.log(capitalize("hello world"));


//4

// function reverseWords(sentence){
//    return sentence.split(" ").reverse()
// }

// console.log(reverseWords("reverses the order of words"))

//5

// const vowels=['a','e','i','o','u']

// function countVowels(str){
//     let vowelCount = 0
//     for(const word of str){
//         if(vowels.includes(word)){
//             vowelCount++
//         }
//     }

// return vowelCount
// }

// console.log(countVowels("hello"))





