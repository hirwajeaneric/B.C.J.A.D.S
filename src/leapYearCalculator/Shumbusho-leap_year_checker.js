function leapYearCalculator(year) {
    // Write your code here
    if (year %4===0 ){
        console.log(true);
    }else if ( year %100===0 && year %400===0){
        console.log(true);
    }else{
        console.log(false);
    }
};

// Write the code to call your function here
leapYearCalculator(2021);


module.exports = {
    leapYearCalculator
}
