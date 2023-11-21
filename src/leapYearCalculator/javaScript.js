// function isLeapYear(year) {
//     // Check if the year is divisible by 4
//     if (year % 4 !== 0) {
//         return false;
//     }
    
//     // If the year is divisible by 100, it must also be divisible by 400 to be a leap year
//     if (year % 100 === 0 && year % 400 !== 0) {
//         return false;
//     }
    
//     // If the year is divisible by 4 and not divisible by 100 (or divisible by 400), it's a leap year
//     return true;
// }
 

function isLeapYear(year){

if(year%4==0){
    console.log(true);
}
    else if(year%100 ==0 && year%400==0){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
isLeapYear(2005);