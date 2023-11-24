// Write codes for the first function bellow this line
function countVowel(str) {
    return str.split(/[aeiou]/i).length - 1;
  }
  console.log(countVowel("mukundente"))


// Write codes for the second function bellow this line

function sortArrayAscendingly(arr) {
    return arr.sort((a, b) => a - b);
}

var numbers = [3, 10, 18, 12, 10, 22, 2, 6, 13, 4];

console.log(sortArrayAscendingly(numbers));



// Write codes for the third function bellow this line
function convertingCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  console.log(convertingCelsiusToFahrenheit(36))
 



// module.exports = {
//     vowelCounter,
//     arraySorter,
//     temperatureConverter
// }
