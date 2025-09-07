/* Using Array Methods
Write code that:

Creates array numbers = [10, 20, 30]
Adds 40 and 50 to the end of array
Removes 2 elements at index 1-2 (20, 30)
Shows array after each step

Expected Output:
Original: [10, 20, 30]
After push: [10, 20, 30, 40, 50]
After splice: [10, 40, 50] */

let numbers = [10, 20, 30];
console.log("Original:", numbers);

numbers.push(40, 50);
console.log("After push:", numbers);

numbers.splice(1, 2); // Remove 2 elements starting from index 1
console.log("After splice:", numbers);