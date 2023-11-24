

/*Create a function that recieves a year and tells the user that the year is leap or not.*/

  function leapYearCalculator(year) {
    // Write your code here
    if(year%4===0 ){
      console.log(true);

    }else if(year%400===0 && year%100===0){
      console.log(true)
    }else{

      console.log(false)
    }
    
};     
// Write the code to call your function here
leapYearCalculator(400);