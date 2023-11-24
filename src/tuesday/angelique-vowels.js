
// Write codes for the first function bellow this line
// Write a function that counts the number of vowels in a string
    function vowelCounter(str) {
        const vowelRegex = /[aeiou]/gi;
        const vowels = str.match(vowelRegex);

        return vowels ? vowels.length : 0;
      }
      const inputString = "Hello, World!";
      const numberOfVowels = vowelCounter(inputString);
      
      console.log(`The number of vowels in "${inputString}" is: ${numberOfVowels}`);
      
// Write codes for the second function bellow this line
// Write a function that sorts an array of numbers in ascending order

function arraySorter(numbers) {
    
    numbers.sort(function(a, b) {
      return a - b;
    });
  
    return numbers;
  }
  
 
  const unsortedArray = [5, 2, 8, 1, 7];
  const sortedArray = sortAscending(unsortedArray);
  
   console.log("Unsorted Array:", unsortedArray);
  console.log("Sorted Array (Ascending):", sortedArray);
  



// Write codes for the third function bellow this line


function celsiusToFahrenheit(celsius) {
   
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
 
  const celsiusTemperature = 25;
  const convertedTemperature = celsiusToFahrenheit(celsiusTemperature);
  
  console.log(`${celsiusTemperature} degrees Celsius is ${convertedTemperature} degrees Fahrenheit.`);
  



// module.exports = {
//     vowelCounter,
//     arraySorter,
//     temperatureConverter
// }

