//q1.

function countVowels(inputString){
    var vowels = ['a','i','u','o','e'];
    var lowercaseString = inputString.toLowerCase();
  
    var vowelCount = 0;
    for (var i = 0; i < lowercaseString.length; i++) {
        if (vowels.includes(lowercaseString[i])) {
          vowelCount++;
        }
      }
    
      return vowelCount;
    }
    console.log(countVowels("aline uwera"));


    //q2.

    function sortArray(arr){
        return arr.sort(function(a,b){
            return a-b;
         });
        }
        console.log(sortArray([0,1,2,3,4,5]));



    //q3.
    function convertsTemp(c){
        var tFahrenheit = (c* 9/5) + 32;
        return tFahrenheit;
    }
    console.log(convertsTemp(50));
    
