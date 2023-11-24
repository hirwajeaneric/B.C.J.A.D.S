function calculator(num1, operator, num2){
    switch(operator){
    case "-": 
        console.log(num1 - num2)
        break;
    case "*" :
        return num1*num2;
    case "/":
        return num1/num2;
    case "+":
        return num1+num2;
    }
                
}
console.log(calculator(4, '-', 6))