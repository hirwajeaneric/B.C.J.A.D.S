function leapYearCalculator(year) {
if (year%4===0 && year%100===0 && year%400===0) {
    
    return true;
}else{

    return false
}
    
};
console.log(leapYearCalculator(1616));


module.exports = {
    leapYearCalculator
}




