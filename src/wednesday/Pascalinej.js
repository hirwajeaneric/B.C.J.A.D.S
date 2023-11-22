// Put your answer bellow this line
function calculator(num1, num2, operator) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if(num2 != 0) {
                return num1 / num2;
            } else {
                return 'Error: Division by zero is not allowed';
            }
        default:
            return 'Error: Invalid operator';
    }
 }
 console.log(calculator(9, '*', 2)); 

// Put your code above this line.
// Do not delete the lines of code bellow
module.exports = {
    calculator
}