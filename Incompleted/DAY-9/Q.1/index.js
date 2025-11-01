// Create a Promise that resolves with the message "Data loaded!" after 2 seconds. Then use .then() to log the message.

function promiseResolve(){
   const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data loaded!")
    }, 2000);
    })
    
    return  myPromise.then((val)=>console.log(val))
}

console.log(promiseResolve())