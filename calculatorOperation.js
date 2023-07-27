// Task 5:

function calculatorOperation(operator, num1, num2) {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            return "Cannot divide by zero";
        }
        return (num1 / num2).toFixed(2);
    } else {
        return "Invalid operator";
    }
}

// Test Case 

console.log("Result:", calculatorOperation('/', 10, 2));
