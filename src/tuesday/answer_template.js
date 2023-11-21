// Write codes for the first function bellow this line
// Write a function that counts the number of vowels in a string
function countVowels(str){
    var count = 0;
    
    for(var m=0; m <= str.length; m++){
        if(isVowel(m)){
            count++;
        }
    }
    return count;
    }
    console.log(countVowels("celine"));


// Write codes for the second function bellow this line
// function that checks if an array is sorted in ascending order.

function sortedArray(arr,n){
    if(n == 1 || n == 0) {
      return true;
    }
    for(let i = 1; i < n; i++){

      
        if(arr[i] < arr[i-1] ){
          return "Array is not sort on ascendind order";
  
        } 
    }
    return "Array is sort on ascendind order";;
  }
  console.log(sortedArray([81,93,1,4,5],4)); 
  console.log(sortedArray([81,93,111,234,500],4)); 
// Write codes for the third function bellow this line
// Write a function that converts a temperature from Celsius to Fahrenheit
function temperature(params) {
    
}




module.exports = {
    vowelCounter,
    arraySorter,
    temperatureConverter
}