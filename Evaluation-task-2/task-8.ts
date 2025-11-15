// Implement a function withTimeout(promise, ms). If the promise does not resolve within
// ms, reject with "Timeout".

// async function withTimeout(promise:Function,ms:number) {
//     return await new Promise((res,rej)=>{
//         res(promise)
//     }).then((res)=>console.log(res))
// }
// console.log(withTimeout(()=>fetch('welcome'),1000))


async function withTimeout(promise:Function,ms:number) {
    const data = new Promise((resolve, reject) => { 
        resolve(promise)
     }).then((res)=> console.log(res)).catch((error)=>console.log(error))

     return data
}


console.log(withTimeout(() =>  fetch('sample/login'),1000))