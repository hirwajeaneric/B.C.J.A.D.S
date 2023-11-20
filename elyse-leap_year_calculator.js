function leapYearChecker(year){

    // var year = 0; 
    
    if(year%4===0){

        console.log(true);

    } else if(year%100===0 && year%400===0){

        console.log(true);

    }else {

        return false;
    }
    

}console.log(leapYearChecker(365));