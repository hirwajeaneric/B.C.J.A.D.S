
function leapYearChecker(number) {
    return (number % 4 === 0 && number % 100 !== 0) || number % 400 === 0;
  }
console.log(leapYearChecker(2100));
console.log(leapYearChecker(2000));
