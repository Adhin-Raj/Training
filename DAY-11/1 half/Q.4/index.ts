// 4. Create a function combineObject, which takes 2 objects as arguments. It should return a new object that merges the properties of both objects. If there's a property key-clash, the property from obj2 takes priority.

// Test cases:
// Input: { a: 1, b: 2 }, { b: 3, c: 4 }
// Output: { a: 1, b: 3, c: 4 }

interface objType{
   [key:string]:number
}

function combineObject(obj1:objType,obj2:objType){
   const newObj = {...obj1,...obj2}
   return newObj
}

console.log(combineObject({ a: 1, b: 2 }, { b: 3, c: 4 }))