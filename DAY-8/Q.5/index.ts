// 5. Define a type Product with id, name, price, and inStock.
// Then, write a function that takes a Product and returns a formatted string:
// "Product [id]: name costs $price".

type productType = {
  id: number;
  productName: string;
  price: number;
  inStock: boolean;
};

const product = {
  id: 1,
  productName: "Mobile",
  price: 8999,
  inStock: true,
};

function displayProduct({ id, price, productName }: productType) {
  return `Product [${id}]: ${productName} costs ${price}`;
}

console.log(displayProduct(product));
