
// Write a function that sorts an array of numbers in ascending order
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
//   Write a function that counts the number of vowels in a string
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