// Put your answer bellow this line
function calculator(operator,num1,num2){
    switch(operator){
        case '+':
            return num1 + num2;
            break;
        case '/':
            return num1 / num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case  '-':
            return num1 - num2;
            break;
        default:
            return "Invalid operator"                
    }
}
console.log(calculator('-',4,2))
// Put your code above this line.
// Do not delete the lines of code bellow
module.exports = {
    calculator
}