function calculator(num1, num2, operations) {
    switch (operations) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "can't divide by zero";
            }
        default:
            return "Invalid operation";
    }
}
const num1 = 10;
const num2 = 2;
const operator = '/';

const result = calculator(num1, num2, operator);
console.log(result);