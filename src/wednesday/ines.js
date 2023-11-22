function calculate(a, b, operator){
    let result;
    switch (operator){
        case "+":
            result= a+b;
            break;
        case "-":
            result= a-b;
            break;
        case "*":
            result= a*b;
            break;
        case "/": 
            result = a/b;
            break;
        default:
            return "Invalid operator";               
    }
        return result;
}
    var a=100;
    var b=50;
    var operator= "/";
    console.log(calculate(a, b, operator));