// Write codes for the first function bellow this line

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
  
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
  
  const vowelCount = countVowels('Hello, World!');
  console.log(vowelCount); 

// Write codes for the second function bellow this line

function sortNumbersAscending(numbers) {
    return numbers.slice().sort((a, b) => a - b);
  }
  
  const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5];
  const sortedArray = sortNumbersAscending(unsortedArray);
  console.log(sortedArray);

// Write codes for the third function bellow this line
function celsiusToFahrenheit(tCelsius) {
    const tFahrenheit = (tCelsius * 9/5) + 32;
    return tFahrenheit;
  }
  
  const celsiusTemperature = 25;
  const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
  console.log(`Temperature in Fahrenheit: ${fahrenheitTemperature}°F`);
  




module.exports = {
    vowelCounter,
    arraySorter,
    temperatureConverter
}