function calculator(number1, operator, number2) {
    let result;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 !== 0) {
                result = number1 / number2;
            } else {
                return "Error: Division by zero is undefined.";
            }
            break;
        default:
            return "Error: Invalid operator.";
    }

    return result;
}

// Example usage:
const num1 = parseFloat(prompt("Enter the first number:"));
const op = prompt("Enter the operator (+, -, *, /):");
const num2 = parseFloat(prompt("Enter the second number:"));

const result = calculator(num1, op, num2);

console.log(`Result: ${result}`);
