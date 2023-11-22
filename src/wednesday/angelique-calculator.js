// Put your answer bellow this line


function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
           
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
}


const number1 = 10;
const number2 = 5;
const operation = '+';

const result = calculator(number1, number2, operation);
console.log(`Result of ${number1} ${operation} ${number2} is:`, result);




// Put your code above this line.
// Do not delete the lines of code bellow
 module.exports = {
   calculator
}