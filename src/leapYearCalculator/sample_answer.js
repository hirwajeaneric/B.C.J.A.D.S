function leapYearCalculator(leapYear) {
    if((leapYear%4==0) && ((leapYear%400==0) || (leapYear%100!==0))){
      return true;
  }
  else{
      return false;
  }
  }

  console.log( leapYearCalculator(2700));
