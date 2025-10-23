// 2. Write a function greet that takes a required name and an optional greeting (default is "Hello").

// Test case:
// greet("Alice");        // Hello, Alice
// greet("Bob", "Hi");    // Hi, Bob


function greet(name:string,greeting:string="Hello"){
    return `${greeting}, ${name}`
}

console.log(greet("Alice"))
console.log(greet("Bob","Hi"))
