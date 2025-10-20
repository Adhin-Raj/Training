//1

// let orgNum = 2
// let orgObj = {
//     name:"levi",
//     age:21
// }

// const copyNum = orgNum
// const copyObj = orgObj

// orgNum = 4
// orgObj={name:"eren",age:15}


// console.log((orgObj === copyObj && copyNum === orgNum) ? 'copied changed':"copied not changed")



//2

// let obj = {
//     name:"Armin",
//     age:21,
//     mark:{
//         eng:24,
//         phy:33,
//         che:43
//     }
// }

// let usingSpread = {...obj}

// let usingMethod =  Object.assign(obj)


// obj.mark ={
//     eng:32,
//     phy:45,
//     che:49
// }

// console.log(obj)
// console.log(usingSpread,)
// console.log(usingMethod)

// if(obj !== usingSpread){
//     console.log("the object created using spread have no changes.")
// } 

// if(obj === usingMethod){
//     console.log("the object create using method have changes")
// }


 

//3

// const nestedObj =  { user: { name: 'John', age: 25 } }

// const deepCopy = JSON.parse(JSON.stringify(nestedObj))

// console.log(nestedObj === deepCopy)


//4

// function addItems(arr,item){
//   let newArr = [...arr,item]
//   return newArr
// }

// console.log(addItems([1,2,3,4,5],6))

//5


function updateUser(user){
    
}