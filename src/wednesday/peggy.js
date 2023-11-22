// Put your answer bellow this line
function calculator (sign,a,b) {
    var answer;
    switch (sign) {
        case "+":
          answer=a+b;  
            break;
        case "-":
          answer=a-b;
            break;
        case "*":
            answer=a*b;
            break;
        case "/":
            if (b!==0) {
              answer=a/b;  
            } else {
              answer="undefined";
            }
            
            break;
        default:
            answer="Invalid input";
            break;
    }
    return answer;
}
console.log(calculator ("+",4,5));
console.log(calculator ("-",10,5));
console.log(calculator ("*",4,5));
console.log(calculator ("/",40,4));
console.log(calculator ("/",40,0));
console.log(calculator ("=",40,2));
// Put your code above this line.
// Do not delete the lines of code bellow
module.exports = {
    calculator
}