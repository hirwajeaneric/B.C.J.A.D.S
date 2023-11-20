
function leapYearCalculator(number) {
    if (number % 4 === 0 && number % 100 === 0 && number % 400 === 0){
        return true;
    }
    else{
        return false;
    }
    
};

console.log (number);


module.exports = {
    leapYearCalculator
}







// function {
//     if (number % 4 === 0 && number % 100 === 0 && number % 400 === 0)// Write your code here
    
// };

// function leapYearChecker(number){
   
// }
// // Write the code to call your function here


// module.exports = {
//     leapYearCalculator
// }

// function leapYearChecker(number){
//     return (number % 4 ===0 && number% 100 !== 0 || number %400===0)
// }  
// console.log(leapYearChecker(2000));
// console.log(leapYearChecker(2000));
// console.log(leapYearChecker(2000));
// console.log(leapYearChecker(2000));





