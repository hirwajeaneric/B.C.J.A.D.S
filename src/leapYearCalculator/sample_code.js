function leapYearCalculator(number) {
    // Write your code here
    
        return (number % 4 === 0 && number % 100 !== 0) || (number % 400 === 0);
      
      
      
    
    
    
};

// Write the code to call your function here

console.log(leapYearChecker(2000)); 
console.log(leapYearChecker(1600)); 
console.log(leapYearChecker(1900)); 
console.log(leapYearChecker(1800));
console.log(leapYearChecker(1700));
console.log(leapYearChecker(2100));
console.log(leapYearChecker(2400));
console.log(leapYearChecker(2300));
console.log(leapYearChecker(2500));
console.log(leapYearChecker(2200));
console.log(leapYearChecker(2600));


module.exports = {
    leapYearCalculator
}




