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
                return "imposible"
            }
             
             break;
        case '*':
             return num1 * num2;
            break;
        default:
            return "Invalid input"
    }
    
}
console.log (calculator(2,4,'*'));