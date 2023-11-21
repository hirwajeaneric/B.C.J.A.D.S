// Write codes for the first function bellow this line

function Vowel(str) {
    const vowels = ['i', 'u', 'o', 'a', 'e'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  }

  console.log(Vowel());
  

// Write codes for the second function bellow this line


function Ascending(arr) {
    return arr.sort((a, b) => a - b);
  }

  console.log(Ascending());
  

// Write codes for the third function bellow this line

function Farhrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }

  console.log(Farhrenheit());
  

module.exports = {
    vowelCounter,
    arraySorter,
    temperatureConverter
}
