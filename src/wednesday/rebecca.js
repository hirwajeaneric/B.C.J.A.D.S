// Put your answer bellow this line
function calculator(num1,operator, num2){
    switch(operator){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Invalid operator'
    }
}
console.log(calculator(4, '+', 2));
console.log(calculator(.3, '-', 2));
console.log(calculator(.8, '*', 2));
console.log(calculator(3, '/', 2));

// Put your code above this line.
// Do not delete the lines of code bellow
module.exports = {
    calculator
}