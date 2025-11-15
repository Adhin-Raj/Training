// Flatten Object Keys​
// Input: {a:{b:{c:1}}, d:2}
// Output: {"a.b.c":1, "d":2}


function flattenedObj (obj:any) {
    let path = ''
    let arr:{[key:string]:number}= {}

    function flatten(obj:any) {
       for(let key in obj) {
        if(typeof obj[key] !== 'object'){
            path += key
            arr[path] = obj[key]
            path =''
        }
        else{
            path +=key + "."
            flatten(obj[key])
        }
       }
    }
    
    flatten(obj)

    return arr
    
}

console.log(flattenedObj({a:{b:{c:1}}, d:2}))
console.log(flattenedObj({a:{b:{c:{d:4}}}, g:2}))
console.log(flattenedObj({a:1,b:1}))
console.log(flattenedObj({a:5,b:{c:2}}))


