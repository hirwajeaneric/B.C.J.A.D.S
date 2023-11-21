function leapYearCalculator(year) {
    if ((year %4 ===0 && year % 100 !==0 ) || ( year % 400===0)) {
        return true;
        
    }
    else{
        return false;
    }
  
    
};

console.log(leapYearCalculator(2005));


module.exports = {
    leapYearCalculator
}



