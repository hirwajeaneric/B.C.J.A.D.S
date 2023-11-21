function leapYearCalculator(Year) {
    
    if((Year%4==0) && ((Year%400==0) || (Year%100!==0))){
      return true;
  }
  else{
      return false;
  }
  }     
  
  console.log( leapYearCalculator(2024));

  module.exports = {
    leapYearCalculator
}
