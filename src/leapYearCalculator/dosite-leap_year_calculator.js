function leapYearChecker(year) {
    // Write your code here
    
    if(year % 4 === 0 && year % 100 === 0 && year % 400 === 0 ){
        // console.log("True") ;
        return true;
    }
    else{
        return false;
    }

    
};

// Write the code to call your function here
console.log(leapYearChecker(2000));


module.exports = {
    leapYearChecker
}




