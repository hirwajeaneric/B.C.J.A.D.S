function calculator(number1,number2,operation){
    var answer;
    switch(operation){
       case "+":
       answer = number1 + number2;
       break;
       case "-":
       answer = number1 - number2;
       break;
       case "*":
        answer = number1 * number2;
        break;
        case "/":
            if (number2 !== 0) {
                result = number1 / number2;
              } else {
                result = 'Cannot divide by zero';
              }
        break;
        default:
            answer = "There is no answer";
}
return answer;
}
let number1= 10;
let number2 = 12;
let operation ="+";


let answer = calculator(number1, number2, operation);
  console.log(result);