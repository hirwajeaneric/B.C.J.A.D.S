function calculator(operator){
    
    var num1=3;
    var num2=7;
    switch(operator){
        case "+":
            return  num1 + num2;
            break;

            case '-':
               return  num1 - num2;
                break;
                case '*':
                    return  num1 * num2;
                    break;
                    case '/':
                        return num1 / num2;
                        break;

                        default:
                            console.log("please enter valid operator");

    }

}

console.log(calculator("-"));




module.exports = {
    calculator
}