// Put your answer bellow this line

function calculator(num1, num2, operator) {
    let result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = 'Cannot divide by zero';
        }
        break;
      default:
        result = 'Invalid operator';
    }
  
    return result;
  }
  
  
  const number1 = 10;
  const number2 = 5;
  const operation = '+';
  
  const result = calculator(number1, number2, operation);
  console.log(result);
// Put your code above this line.
// Do not delete the lines of code bellow
module.exports = {
    calculator
}