// 3. Write a function which deep clones a given object.

function deepCloning(obj) {
  if(typeof obj !== 'object') return "input should be object or array"
  const clone = structuredClone(obj);
  console.log(JSON.stringify(clone) === JSON.stringify(obj));
  return clone;
}

function deepCloneTest(array) {
  
  array.forEach((element) => {
    const result = deepCloning(element[0]);
    // console.log(result)
    if (JSON.stringify(result) === JSON.stringify(element[1])) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });

  return "Completed...!";
}

console.log(
  deepCloneTest([
    [
      {
        name: "JavaScript",
        country: "US",
        dataTypes: [
          "string",
          "number",
          "boolean",
          "object",
          "null",
          "undefined",
        ],
      },
      {
        name: "JavaScript",
        country: "US",
        dataTypes: [
          "string",
          "number",
          "boolean",
          "object",
          "null",
          "undefined",
        ],
      },
    ],
    [
      {
        name: "John",
        country: "Ind",
        
      },
      {
        name: "John",
        country: "Ind",
        
      },
    ],
    [
      1,"input should be object or array"
    ],
    [
      [1,2,3,4,5],
      [1,2,3,4,5]
    ],
    [
      {},
      {}
    ],
    [
      [],
      []
    ],
    [
      "string",
      "input should be object or array"
    ],
    [
      true,
      "input should be object or array"
    ],
    [
      {
        name:'Raju',
        age:24,
        isStudent:true
      },
      {
        name:'Raju',
        age:24,
        isStudent:false
      },
    ],
    [
      ["javascript","java",'python'],
      ["javascript","java",'python']
    ],
    [
      [true,"javascript",1990],
      [true,"javascript",1990],
    ]
  ])
);
