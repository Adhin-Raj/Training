// 3. Create a Promise that resolves after 2 seconds with "Success". Use .finally() to log "Promise completed" after it's done (whether resolved or rejected).

function finallyPromise() {
  const promise = new Promise((res,rej) => res("Success"));

  return promise
    .then((val) => console.log(val)).catch((err)=>console.log(err))
    .finally(() => console.log("Promise Completed"));
}

console.log(finallyPromise());
