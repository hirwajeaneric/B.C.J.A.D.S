function leapYearCalculator(year)
// here i will first check
 {
    
    if (year % 4 === 0) {
      
      if (year % 100 === 0 && year % 400 !== 0)
       {
       
        return false;
      }
       else 
      {
        
        return true;
      }
    } 
    else 
    {
      
      return false;
    }
  }
  
 
  const yearToCheck = 2024;
  const isLeapYear = leapYearCalculator(yearToCheck);
  
  if (isLeapYear) {
    console.log(`${yearToCheck} is a leap year.`);
  } else
   {
    console.log(`${yearToCheck} is not a leap year.`);
  }
  module.exports = {
    leapYearCalculator
}
