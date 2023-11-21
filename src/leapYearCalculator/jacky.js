// Write codes for the first function bellow this line
function arraySorter(numbers)
 {
  return numbers.sort((a, b) => a - b);
}


const number = [5, 2, 8, 1, 9];
const sortedArray = arraySorter(number);
console.log(number);
// Write codes for the second function bellow this line


function temperatureConverter(tCelsius) {
  const tFahrenheit = (tCelsius * 9/5) + 32;
  return tFahrenheit;
}

const temperatureInCelsius = 25;
const temperatureInFahrenheit = temperatureConverter(temperatureInCelsius);
console.log(`${temperatureInCelsius}°C is equal to ${temperatureInFahrenheit}°F`);

// Write codes for the third function bellow this line
function vowelCounter(inputString) 
{
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of inputString) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

const testString = "Hello World";
const vowelCount = countVowels(testString);
console.log(`Number of vowels in "${testString}": ${vowelCount}`);

module.exports = {
  vowelCounter,
  arraySorter,
  temperatureConverter
}