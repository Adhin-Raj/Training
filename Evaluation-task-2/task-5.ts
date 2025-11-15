// 5.​ Write a function filterProducts(products, searchText) that returns all products whose
// name includes the search text (case-insensitive).​
// [
// { name: "Laptop", price: 60000 },
// { name: "Mouse", price: 800 },
// { name: "Monitor", price: 12000 }
// ]


function filterProducts(products:{name:string,price:number}[],searchText:string) {
   return  products.filter((item)=> item.name.toLowerCase().includes(searchText.toLowerCase()))

}

console.log(filterProducts([
{ name: "Laptop", price: 60000 },
{ name: "Mouse", price: 800 },
{ name: "Monitor", price: 12000 }
],'Lap'))

console.log(filterProducts([
{ name: "Laptop", price: 60000 },
{ name: "Mouse", price: 800 },
{ name: "Monitor", price: 12000 }
],'m'))

console.log(filterProducts([
{ name: "Laptop", price: 60000 },
{ name: "Mouse", price: 800 },
{ name: "Monitor", price: 12000 }
],'mobile'))