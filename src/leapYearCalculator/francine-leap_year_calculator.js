function leapYearCalculator() {
       if (year % 4 === 0 && year % 100 !== 0  && year % 400 === 0){
           return "true is a leap year";
     } else{
    /      return "false is not a leap year";}
      console.log(leapYearCalculator(2000));
    }
module.exports = {
    leapYearCalculator
}
