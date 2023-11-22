function calculate(num1, num2, operator) {
    let result;
    
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Cannot divide by zero';
            }
            break;
        default:
            result = 'Invalid operator';
    }
    
    return result;
}

const number1 = 10;
const number2 = 5;
const operation = '+';

const output = calculate(number1, number2, operation);
console.log(`Result: ${output}`);
