function leapYearChecker(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(leapYearChecker(2600));
console.log(leapYearChecker(1600));