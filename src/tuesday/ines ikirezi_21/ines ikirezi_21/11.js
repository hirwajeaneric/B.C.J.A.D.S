// Write codes for the first function bellow this line

    function countVowels(inputString) {

        var vowels = ['a', 'e', 'i', 'o', 'u'];
      
        var lowercaseString = inputString.toLowerCase();
      
        var vowelCount = 0;
      
        for (var i = 0; i < lowercaseString.length; i++) {
          if (vowels.includes(lowercaseString[i])) {
            vowelCount++;
          }
        }
      
        return vowelCount;
    }
      console.log(countVowels("ines ikirezi"));



// Write codes for the second function bellow this line

function  arrayInAscending(arr){
  return arr.sort((a,b) => a-b);

}
var number = [0,11,45,7,124,8,9];
console.log(arrayInAscending(number));

// Write codes for the third function bellow this line



module.exports = {
    vowelCounter,
    arraySorter,
    temperatureConverter
}