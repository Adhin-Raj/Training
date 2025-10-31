// 2. Create a Promise that rejects after 1 second with the error "Network error". Handle it with .catch() to log the error message.


function rejPromise(){
    const promise = new Promise((res,rej)=>setTimeout(() => {
        rej("network error")
    }, 1000))

    return promise.then((_)=>console.log("hi")).catch((err)=>console.log(err))
}

console.log(rejPromise())