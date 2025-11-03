//1

// const typeArr = ["walter",25,{name:"eren",age:15},false,null,undefined,[1,2,3],()=>console.log("hi")]

// for(let i=0;i<typeArr.length;i++){
//     console.log(typeof typeArr[i])
// }


//2

// function arrayCheck(val){
//    return Array.isArray(val)
// }

// function arrayCheckTest(array){
//     array.forEach((item)=>{
//         const result = arrayCheck(item[0])
//         if(result === item[1]){
//             console.log('Passed')
//         }
//         else{
//             console.log("Failed")
//         }

//     })

//     return "Completed...!"
// }

// console.log(arrayCheckTest([
//     [[1,2,3],true],
//     [{1:1,2:2},false],
//     [...[1],false],
//     [1,false],
//     ["hello",false],
//     [undefined,false],
//     [NaN,false],
//     [["hello"],true],
//     [[{a:2}],true],
//     [true,false],
//     [[true],true],
//     [()=>item*item,false],
//     [[()=>item + item],true],
//     [[1,"hello",false],true]
// ]))


//3

// function getValue(a){

//     if(a === undefined){
//         return 'No Value'
//     }
//     else if(a === null){
//         return `Empty`
//     }
//     else{
//         return a
//     }
// }

// function getValueTest(array){
//     array.forEach((item)=>{
//         const result = getValue(item[0])
//         console.log(result)
//         if(result === item[1]){
//             console.log('Passed')
//         }
//         else{
//             console.log("Failed")
//         }

//     })

//     return "Completed...!"
// }

// console.log(getValueTest([
//     [3,3],
//     [null,'Empty'],
//     [undefined,'No Value'],
//     [true,true],
//     ["hello","hello"],
//     [false,false],
//     [67,67],
//     ["1231","1231"],
//     ['$#@4','$#@4'],
//     ['',''],
//     [-10,-10],
//     [6437,6437],
//     ['hello world',"hello world"],
//     ["1 2 3 4 5","1 2 3 4 5"],
//     [Infinity,Infinity]
// ]))

//4 

// function validNumCheck(arg) {
//   if (
//     isNaN(arg) ||
//     arg === Infinity ||
//     arg === undefined ||
//     typeof arg !== "number"
//   ) {
//     return false;
//   }
//   return true;
// }

// function validNumCheckTest(array) {
//   array.forEach((item) => {
//     const result = validNumCheck(item[0]);
//     if (result === item[1]) {
//       console.log("Passed");
//     } else {
//       console.log("Failed");
//     }
//   });

//   return "Completed...!";
// }

// console.log(
//   validNumCheckTest([
//     [3, true],
//     [undefined, false],
//     [null, false],
//     ["hello world", false],
//     [56, true],
//     [-1, true],
//     [1.4, true],
//     ["45", false],
//     [(item) => item + item, false],
//     [[3, 3], false],
//     [{ a: 2 }, false],
//     [45, true],
//     [1093020309, true],
//     [Infinity, false],
//     [NaN, false],
//   ])
// );


//5

// let input = 'f3'

// if(input !== isNaN(input)){
//  console.log("NaN detected")
// }

//      input = NaN

//     if (input !== input) {
//         console.log("Nan detected") ;
//     } else {
//         console.log(false);
//     }
