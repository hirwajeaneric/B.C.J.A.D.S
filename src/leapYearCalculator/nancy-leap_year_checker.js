function leapYearChecker(number) {
    // Write your code here
        if (year /  4) {
            console.log("true")
        }
        else if (year /100 ) {
            console.log("true");
        }
    
        else if (year / 400) {
            console.log("true");
        }
        else if (year / 366) {
            console.log("true");
        }
        else if (year / 365) {
            console.log("true");
        }
    }

// Write the code to call your function here


var year = [1700, 1800, 1900, 2100, 2200, 2300, 2500, 2600];
    leapYearChecker
console.log(year);
