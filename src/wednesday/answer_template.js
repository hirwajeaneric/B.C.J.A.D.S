// Put your answer bellow this line
function calculator(num1,num2,operator) {

    switch (operator) {
        case '+':
            return num1 + num2;
            break;
         case '-':
            return num1 - num2;
            break;
         case '/':
            if(num2 !== 0){
                return num1 / num2;
            }
            else{
                return " "
            }
             break;
        case '*':
             return num1 * num2;
            break;
        default:
            return "Invalid input"
    }
}

console.log ("Answer is: ",calculator(6,7,'*'));

// Put your code above this line.
// Do not delete the lines of code bellow
module.exports = {
    calculator
}