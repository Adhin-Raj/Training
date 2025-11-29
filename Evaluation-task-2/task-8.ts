// Implement a function withTimeout(promise, ms). If the promise does not resolve within
// ms, reject with "Timeout".

// async function withTimeout(promise:Function,ms:number) {
//     return await new Promise((res,rej)=>{
//         res(promise)
//     }).then((res)=>console.log(res))
// }
// console.log(withTimeout(()=>fetch('welcome'),1000))


// async function withTimeout(promise:Function,ms:number) {
//     const data = new Promise((resolve, reject) => { 
//         resolve(promise)
//      }).then((res)=> console.log(res)).catch((error)=>console.log(error))

//      return data
// }


// console.log(withTimeout(() =>  fetch('sample/login'),1000))





//final answers

async function withTimeOut(promise: Promise<string>, ms: number) {
  return new Promise((res, rej) => {
    const timer = setTimeout(() => {
      rej("Failed");
    }, ms);

    promise
      .then((val) => {
        clearTimeout(timer);
        res(val);
      })
      .catch((err) => rej("Failed from params promise" + err));
  });
}

const p: Promise<string> = new Promise((res) => {
  setTimeout(() => {
    res("Resolved");
  }, 2000);
});

withTimeOut(p, 1000)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));