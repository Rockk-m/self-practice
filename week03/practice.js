/* Calculator Function
Task: Create a calculator function that takes 3 parameters: num1, num2, and operation

operation can be "+", "-", "*", or "/"
If dividing by zero, return "Cannot divide by zero"
If operation is invalid, return "Invalid operation"

console.log(calculator(10, 5, "+")); // 15
console.log(calculator(10, 0, "/")); // "Cannot divide by zero"
console.log(calculator(10, 5, "%")); // "Invalid operation" */

function calculator(num1, num2, operation) {
    // Check for division by zero
    if (operation === "/" && num2 === 0) {
        return "Cannot divide by zero";
    }
    
    // Perform calculation based on operation
    switch (operation) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Invalid operation";
    }
}

// Test 
console.log(calculator(10, 5, "+")); // 15
console.log(calculator(10, 5, "-")); // 5
console.log(calculator(10, 5, "*")); // 50
console.log(calculator(10, 5, "/")); // 2
console.log(calculator(10, 0, "/")); // "Cannot divide by zero"
console.log(calculator(10, 5, "%")); // "Invalid operation"