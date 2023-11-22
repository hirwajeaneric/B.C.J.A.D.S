// Put your answer bellow this line
 function calculator(num1,num2,operator){
    let result;
    switch(operator){
        case '+':
            result = num1 + num2;
            break;
            case '-':
            result = num1 - num2;
            break;case '*':
            result = num1 * num2;
            break;case '/':
            result = num1 / num2;
            break;
            default:
                return "Invalid operator";
    }
    return result;
 }
 console.log(calculator(4,2,'+'));

// Put your code above this line.
// Do not delete the lines of code bellow
module.exports = {
    calculator
}