// Put your answer bellow this line

function calculator(num1,num2,operator){
    var result;

    switch(operator){
        case '+':
            result= num1 + num2;
            break;
            case '-':
                result= num1 - num2;
                break;
                case '*':
                    result= num1 * num2;
                    break;
                    case '/':
                        if(num2 !== 0){
                            result= num1 / num2;
                        }
                        else{
                            result= "Cannot divide by Zero";
                        }
                        break;
                        default:
                            result= "Invalid operator";
    }
        return result;
}

const num1 = 10;
const num2 = 5;
const op = '*'; 
const output= calculator(num1,num2,op);
console.log("Result is:" ,output);

// Put your code above this line.
// Do not delete the lines of code bellow
module.exports = {
calculator
}