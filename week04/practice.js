const products = [
  { name: "iPhone", price: 25000, category: "electronics" },
  { name: "Banana", price: 50, category: "food" },
  { name: "Laptop", price: 35000, category: "electronics" },
  { name: "Apple", price: 80, category: "food" },
  { name: "Tablet", price: 15000, category: "electronics" }
];

/* Tasks:
Find products with price greater than 20,000
Convert all product names to uppercase
Calculate the total price of products that cost more than 20,000 */

// 1. Find products with price greater than 20,000
const expensiveProducts = products.filter(product => product.price > 20000);
console.log(expensiveProducts);
// Output: [{ name: "iPhone", price: 25000, category: "electronics" }, 
//          { name: "Laptop", price: 35000, category: "electronics" }]

// 2. Convert all product names to uppercase
const uppercaseNames = products.map(product => product.name.toUpperCase());
console.log(uppercaseNames);
// Output: ["IPHONE", "BANANA", "LAPTOP", "APPLE", "TABLET"]

// 3. Calculate total price of products that cost more than 20,000
const totalExpensive = products
  .filter(product => product.price > 20000)
  .map(product => product.price)
  .reduce((sum, price) => sum + price, 0);
console.log(totalExpensive);
// Output: 60000