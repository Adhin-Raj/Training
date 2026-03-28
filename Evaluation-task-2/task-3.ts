// Write a function getValueByPath(obj, path) that safely retrieves nested values using a
// string path.​
// Input:
// obj = { a: { b: { c: 42 } } }, path = "a.b.c"
// Output: 42
// Input: path = "a.x.c" → Output: undefined


function getValueByPath(obj:any,path:string) {

   const  pathStr = path.replaceAll('.','')
    
    function nestedObj(obj:any) {

            const objKeys = Object.keys(obj)[0]
            if(!pathStr.includes(objKeys)){
                return
            }
            
        nestedObj(obj[objKeys])

    }
    nestedObj(obj)
    return 
}

console.log(getValueByPath({ a: { b: { c: 42 } } },"a.b.c"))