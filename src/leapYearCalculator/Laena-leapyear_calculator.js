
function leapYearCalculator(number){
    return (number % 4==0 && number % 100!==0)|| number % 400===0;
}
console.log(leapYearCalculator(2600));
console.log(leapYearCalculator(1600));

module.exports = {
    leapYearCalculator
}