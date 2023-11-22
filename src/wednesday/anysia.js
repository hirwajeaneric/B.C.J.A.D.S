// Write a JavaScript program that takes two numbers and an operator (+, -, *, /) as input and uses a switch case to perform the corresponding operation.
// The function name should be: "calculator"
function calculator( a, operator, b){
    switch(operator){
        case '+':
            return a + b;
            case '-':
                return a - b;
                case '*':
                    return a * b;
                    case '/':
                        return a / b;
                        default: 'Invalid Operator';
    }
}
console.log(calculator(2, '+', 4));
console.log(calculator(2, '-', 4));
console.log(calculator(2, '*', 4));
console.log(calculator(2, '/', 4));
