// Write codes for the first function bellow this line

 function countWords(str, position, char) {
    if (position < 0 || position >= str.length) {
      return str;
    }
    return str.substring(0, position) + char + str.substring(position + 1);
   }
   
   console.log(countWords("Hello", 1, 'a')); 

// Write codes for the second function bellow this line
function sortAndArrange(arr) {
    arr.sort((a, b) => a - b);
    console.log(numbers);
    var firstThreeNumbers = numbers.slice(0, 3);
    console.log(firstThreeNumbers); 
}
var numbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
sortAndArrange(numbers);

// Write codes for the third function bellow this line

function converTemp(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  console.log(converTemp(25)); 
  console.log(converTemp(-10)); 
  


module.exports = {
    vowelCounter,
    arraySorter,
    temperatureConverter
}