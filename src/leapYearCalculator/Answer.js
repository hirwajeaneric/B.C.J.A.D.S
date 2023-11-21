
function checkLeapYear(year) {

    
    // if ((0 == year % 4) && (0 != year % 100) || (400== year % 0))
    if (( year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
        console.log(year + ' is a leap year');
    } else {

        console.log(year + ' is not a leap year');
    }
    
}

const year = checkLeapYear('Enter a year:');


checkLeapYear(2016);