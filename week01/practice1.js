/* Creating and Accessing Arrays
Write code to create an array named fruits containing "apple", "banana", "orange", 123, true
Then display:

Array length
First and last elements
Data type of each element

Expected Output:
Array length: 5
First: apple
Last: true
0: apple (string)
1: banana (string)
2: orange (string)
3: 123 (number)
4: true (boolean) */

const fruits = ["apple", "banana", "orange", 123, true];

console.log(`Array length: ${fruits.length}`);
console.log(`First: ${fruits[0]}`);
console.log(`Last: ${fruits[fruits.length - 1]}`);

for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}: ${fruits[i]} (${typeof fruits[i]})`);
}