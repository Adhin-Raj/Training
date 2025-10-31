// 4. Create a Promise that resolves with the number 5. Chain it to multiply the number by 2, then add 10, and finally log the result (should be 20).

function promiseChain() {
    const promise = new Promise((res)=>res(5))

    return promise.then((val)=>val *2).then((val)=>console.log(val + 10))
}

console.log(promiseChain())