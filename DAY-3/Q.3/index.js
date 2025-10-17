// 3. Write a function which deep clones a given object.

function deepCloning(obj) {
  const clone = structuredClone(obj);
  return clone;
}

console.log(
  deepCloning({
    name: "JavaScript",
    country: "US",
    dataTypes: ["string", "number", "boolean", "object", "null", "undefined"],
  })
);
