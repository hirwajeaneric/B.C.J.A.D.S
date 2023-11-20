function leapYearChecker(year) {
    // Write your code here
    if (year % 4 === 0){
        if( (year % 100 === 0 && year % 400 === 0 )){
            return true
        }

    }
    return false
    
};

// Write the code to call your function here
let sample_years = [1700, 1800, 1900, 2000, 2100, 2200, 2300, 2500, 2600];
let test_function = leapYearChecker(sample_years[0]);
console.log(test_function);
if (test_function){
    console.log(`"The year is leap"`);
}
else{
    console.log(`The year  is not a leap year`);
}


// module.exports = {
//     leapYearCalculator
// }




